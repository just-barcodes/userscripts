// ==UserScript==
// @name        youtube hide lang alert bar
// @namespace   http://www.youtube.com/
// @include     https://www.youtube.com/*
// @include     http://www.youtube.com/*
// @description removes the language alert bar on youtube
// @version     1
// @grant       none
// ==/UserScript==
(function () {
  function clearAlert() {
    var ytalert = document.getElementById('yt-lang-alert-container');
    if (ytalert !== null) {
      ytalert.style.display = 'none';
    }
    if (intv !== '') {
      clearInterval(intv);
    }
  }
  var intv = setInterval(clearAlert, 2000); //workaround, since I haven't yet figured out, how to call clearAlert() when new video loads in a playlist...
}) ();
