chrome.browserAction.onClicked.addListener(()=>{

  const collectButton = document.getElementById('collect');
  const openButton = document.getElementById('open');

  chrome.browserAction.setIcon({ path: "record.png" });

  chrome.tabCapture.capture({video:true,
    audio:false,
    videoConstraints: {
      mandatory: {
          minWidth: 1920,
          minHeight: 1080,
          maxWidth: 1920,
          maxHeight: 1080
        }
      }
    }, (video) => {

      let recordedChunks = [];
      let options = {mimeType: 'video/webm;codecs=vp9'};
      let media = new MediaRecorder(video, options);
      media.ondataavailable = handleDataAvailable;
      media.start();

      function handleDataAvailable(event) {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        } else {
          return;
        }
      }

      chrome.browserAction.onClicked.addListener(() => {

        chrome.browserAction.setIcon({path: "record-black.png"})
        video.getVideoTracks()[0].stop();
        media.stop();

        var blob = new Blob(recordedChunks, {
          type: 'video/webm'
        });

        var url = URL.createObjectURL(blob);

        var a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'screenCapture.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
         document.body.removeChild(a);
         window.URL.revokeObjectURL(url);
        }, 100);


      });
    });
  });
