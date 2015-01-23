// ==UserScript==
// @name        google cal weekend color
// @namespace   google cal weekend color
// @include     https://www.google.com/calendar/*
// @version     1
// @grant       none
// ==/UserScript==
(function () {
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = 'td.tg-weekend, td.tg-weekend .tg-today { background-color: #ffdde9; }';
  (document.getElementsByTagName('head') [0]).appendChild(style);
}) ();
