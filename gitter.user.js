// ==UserScript==
// @name        Gitter Fixer
// @namespace   https://joker314.github.io
// @description A userscript to remove the green notice you get when you recieve a message on Gitter
// @include     http://gitter.im/*
// @include     https://gitter.im/*
// ==/UserScript==
var bodge = document.createElement("STYLE");
bodge.appendChild(document.createTextNode(".notification-text{visibility:hidden; display:none;}"));
document.body.appendChild(bodge);
