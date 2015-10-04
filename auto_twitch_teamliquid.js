// ==UserScript==
// @name        auto_twitch_teamliquid
// @namespace   http://www.teamliquid.net
// @include     http://www.teamliquid.net/video/streams/*
// @include     http://www.liquiddota.com/stream/*
// @include     http://www.liquidlegends.net/stream/*
// @include     http://www.liquidhearth.com/stream/*
// @description Redirect to original stream-website
// @version     1
// @grant       none
// ==/UserScript==

(function () {
    var videoplayer = document.getElementsByClassName('videoplayer')[0];
    var src = videoplayer.getAttribute('src');
    var index = src.indexOf('/embed');
    if(index != -1) {
        src = src.substr(0, index);
    }
    window.location = src;
}) ();
