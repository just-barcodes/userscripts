// ==UserScript==
// @name        prevent context menu modification
// @namespace   https://developer.mozilla.org/
// @include     https://developer.mozilla.org/*
// @version     1
// @grant       none
// ==/UserScript==


(function () {
    modification = document.getElementById('edit-history-menu');
    modification.parentNode.removeChild(modification);
}) ();
