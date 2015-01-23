// ==UserScript==
// @name        youtube hide lang alert bar
// @namespace   youtube hide lang alert bar
// @include     https://www.youtube.com/*
// @include     http://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

function clearAlert() {
  document.getElementById("yt-lang-alert-container").style.display = "none";
}

setInterval(clearAlert, 2000); //workaround, since I haven't yet figured out, how to call clearAlert() when new video loads in a playlist...