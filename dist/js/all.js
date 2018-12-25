"use strict";

console.log("js file get");

function getActive() {
  //set the active element of the navbar
  var html_navbars = [document.getElementById("html_navbar0"), document.getElementById("html_navbar1"), document.getElementById("html_navbar2"), document.getElementById("html_navbar3"), document.getElementById("html_navbar4"), document.getElementById("html_navbar5")];
  html_navbars.forEach(function (item, index) {
    console.log(item.href);
    console.log(window.location.pathname);

    if (item.href == window.location.href) {
      item.classList.add("active");
    }
  });
}