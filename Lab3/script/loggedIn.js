"use strict";

var loggedIn = {
  
  head : document.getElementById("head"),
  headText : document.createElement("h2"),
  
  
  init: function(){
    loggedIn.headText.innerHTML = "Välkommen till gymnastikhittepå!";
    loggedIn.head.appendChild(loggedIn.headText);
  }
};
window.onload = loggedIn.init;