#Videoshot

[Videoshot Demo][prodlink]

##Description

Videoshot is a chrome extension developed to enable users to capture moving screenshots of their chrome browser window in full 1080p

##Our Story

This chrome extension was inspired while writing production readme's for my past projects. I could not find a simple and intuitive way to capture a live shot of my current browser window, and settled on using static screenshots to show off my work.

After spending some time learning how to build chrome extensions, I became comfortable enough to tackle harder projects and one of which turned out to be Videoshot.

My prototype version featured a popup window that allowed users to click on a record button to start recording and click on the save button to stop. This original implementation had some bugs, the most major of which was when a user clicked anywhere outside the popup window it would cause the recording to stop and you would loose the capture.

My second implementation (current) was to have a single icon that a user would click on which would toggle to a record button and then to a stop and save button respectively. I was able to accomplish this by having a background script run when the user loaded their chrome page.

[prodlink]: https://gfycat.com/PlasticLegalChuckwalla
