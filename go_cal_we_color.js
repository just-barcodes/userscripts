// ==UserScript==
// @name        google cal weekend color
// @namespace   https://www.google.com/calendar/
// @include     https://www.google.com/calendar/*
// @include     https://calendar.google.com/calendar/*
// @description adds a redish color to weekends on google calendar
// @version     1
// @grant       none
// ==/UserScript==
(function () {
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = 'td.tg-weekend, td.tg-weekend .tg-today { background-color: #ffdde9; }';
  (document.getElementsByTagName('head') [0]).appendChild(style);
}) ();
