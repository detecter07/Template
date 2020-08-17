/* global console */
var element = document.getElementsByClassName("menu");


var ul = document.getElementById("mymenu");



element.onclick = function () {

  console.log("hello");


  ul.classList.toggle('show');


};
