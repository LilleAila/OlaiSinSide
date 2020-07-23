function setCookie(cname,cvalue,exdays) {
  if (exdays != null || exdays != undefined || exdays != "" || exdays != " ") {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
  	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  else if (exdays == null || exdays == undefined || exdays == "" || exdays == " ") {
    var expires = "expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function color() {
    var clr = $("#color").val();
    $("body").css("background-color",clr);
    setCookie("color",clr);
};

window.onload = function() {
  if (getCookie("login").length != 0) {
    if (getCookie("login") == "true") {
      $("#login").css("display","none");
      $("#header").css("display","block");
      $("#hjem").css("display","block");
      $(".menu-button").css("display","block");
    }
    else if (getCookie("login") == "false") {
      $("#login").css("display","block");
      $("#hjem").css("display","none");
      $("#Kalkulator").css("display","none");
      $("#mus").css("display","none");
      $("#skoleting").css("display","none");
      $("#header").css("display","none");
      $("#spill").css("display","none");
      $("#klokke").css("display","none");
      $("#wysi").css("display","none");
      $("#farge").css("display","none");
      $(".menu-button").css("display","none");
    }
  }
  if (getCookie("color").length != 0) {
    document.getElementById("color").value = getCookie("color");
    $("body").css("background-color",getCookie("color"));
  }
}

function loggut() {
  if ($("#login").css("display") == ("none")) {
  $("#login").css("display","block");
  $("#hjem").css("display","none");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","none");
  $("#header").css("display","none");
  $("#spill").css("display","none");
  $("#klokke").css("display","none");
  $("#wysi").css("display","none");
  $("#farge").css("display","none");
  $(".menu-button").css("display","none");
  setCookie("login","false")
  }
  else {
    alert("Du er ikke logget inn")
  }
}

//function that display value 
function dis(val) {
    document.getElementById("result").value += val
}

//function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}

function kalkulator() {
  if ($("#login").css("display") == ("none")) {
  $("#Kalkulator").css("display","block");
  $("#hjem").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","none");
  $("#spill").css("display","none");
  $("#klokke").css("display","none");
  $("#wysi").css("display","none");
  $("#farge").css("display","none");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function hjem() {
  if ($("#login").css("display") == ("none")) {
  $("#hjem").css("display","block");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","none");
  $("#spill").css("display","none");
  $("#klokke").css("display","none");
  $("#wysi").css("display","none");
  $("#farge").css("display","none");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function mus() {
  if ($("#login").css("display") == ("none")) {
  $("#hjem").css("display","none");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","block");
  $("#skoleting").css("display","none");
  $("#spill").css("display","none");
  $("#klokke").css("display","none");
  $("#wysi").css("display","none");
  $("#farge").css("display","none");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function skoleting() {
  if ($("#login").css("display") == ("none")) {
  $("#hjem").css("display","none");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","block");
  $("#spill").css("display","none");
  $("#klokke").css("display","none");
  $("#wysi").css("display","none");
  $("#farge").css("display","none");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function spill() {
  if ($("#login").css("display") == ("none")) {
  $("#hjem").css("display","none");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","none");
  $("#spill").css("display","block");
  $("#klokke").css("display","none");
  $("#wysi").css("display","none");
  $("#farge").css("display","none");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function klokke() {
  if ($("#login").css("display") == ("none")) {
  $("#hjem").css("display","none");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","none");
  $("#spill").css("display","none");
  $("#klokke").css("display","block");
  $("#wysi").css("display","none");
  $("#farge").css("display","none");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function wysi() {
  if ($("#login").css("display") == ("none")) {
  $("#hjem").css("display","none");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","none");
  $("#spill").css("display","none");
  $("#klokke").css("display","none");
  $("#wysi").css("display","block");
  $("#farge").css("display","none");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function farge() {
  if ($("#login").css("display") == ("none")) {
  $("#hjem").css("display","none");
  $("#Kalkulator").css("display","none");
  $("#mus").css("display","none");
  $("#skoleting").css("display","none");
  $("#spill").css("display","none");
  $("#klokke").css("display","none");
  $("#wysi").css("display","farge");
  $("#farge").css("display","block");
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function changesrc() {
  if ($("#login").css("display") == ("none")) {
  var iframe = document.getElementById("musik");
  var select = document.getElementById("select");
  if (select.value != "Velg en sang") {
    if (select.value == "Time leaper") {
      iframe.src = "https://www.youtube.com/embed/nMbx8EurE0g";
    }
    else if (select.value == "At the speed of light") {
      iframe.src = "https://youtube.com/embed/1Zrq8FiKS6A";
    }
    else if (select.value == "Unity") {
      iframe.src = "https://youtube.com/embed/n8X9_MgEdCg";
    }
    else if (select.value == "Press start") {
      iframe.src = "https://youtube.com/embed/XoLouT7TqZY";
    }
    else if (select.value == "Press start VIP mix") {
      iframe.src = "https://youtube.com/embed/SYDwZLfICVw";
    }
    else if (select.value == "Press start derpcat") {
      iframe.src="https://youtube.com/embed/f60ipaZhn3s";
    }
  }
  else {
    iframe.src = "";
  }
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function iframespill() {
  if ($("#login").css("display") == ("none")) {
  var frame2 = document.getElementById("iframe22");
  var select2 = document.getElementById("iframespill");
  if (select2.value != "Velg spill") {
    if (select2.value == "Tileman.io") {
      frame2.src="https://tileman.io";
    }
    else if (select2.value == "Wormate.io") {
      frame2.src="https://wormate.io";
    }
    else if (select2.value == "Minecraft classic") {
      frame2.src="https://classic.minecraft.net";
    }
    else if (select2.value == "Super mario bros 3") {
      frame2.src="https://www.retrogames.cc/embed/16680-super-mario-bros-3-usa.html";
    }
    else if (select2.value == "Super mario 64") {
      frame2.src="https://www.retrogames.cc/embed/32112-super-mario-64-usa.html";
    }
    else if (select2.value == "Lego batman") {
      frame2.src="https://www.retrogames.cc/embed/37833-lego-batman-the-videogame-usa-en-fr-es.html";
    }
  }
  else {
    frame2.src = "";
  }
  }
  else {
    alert("Du er ikke logget inn")
  }
}

function login() {
  if($("#bruker").val() == "Olai" && $("#pass").val() == "Olaisinside123") {
    $("#login").css("display","none");
    $("#header").css("display","block");
    $("#hjem").css("display","block");
    $(".menu-button").css("display","block");
    $("#pass").val("");
    $("#bruker").val("");
    setCookie("login","true")
  }
  else {
    alert("Feil brukernavn eller passord");
    $("#pass").val("");
    $("#bruker").val("");
    setCookie("login","false")
  }
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('tid').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function r(){function e(){var r={width:u.width/u.naturalWidth,height:u.height/u.naturalHeight},a={width:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-left"),10),height:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-top"),10)};i.forEach(function(e,t){var n=0;o[t].coords=e.split(",").map(function(e){var t=1==(n=1-n)?"width":"height";return a[t]+Math.floor(Number(e)*r[t])}).join(",")})}function t(e){return e.coords.replace(/ *, */g,",").replace(/ +/g,",")}function n(){clearTimeout(d),d=setTimeout(e,250)}function r(e){return document.querySelector('img[usemap="'+e+'"]')}var a=this,o=null,i=null,u=null,d=null;"function"!=typeof a._resize?(o=a.getElementsByTagName("area"),i=Array.prototype.map.call(o,t),u=r("#"+a.name)||r(a.name),a._resize=e,u.addEventListener("load",e,!1),window.addEventListener("focus",e,!1),window.addEventListener("resize",n,!1),window.addEventListener("readystatechange",e,!1),document.addEventListener("fullscreenchange",e,!1),u.width===u.naturalWidth&&u.height===u.naturalHeight||e()):a._resize()}function e(){function t(e){e&&(!function(e){if(!e.tagName)throw new TypeError("Object is not a valid DOM element");if("MAP"!==e.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+e.tagName+">.")}(e),r.call(e),n.push(e))}var n;return function(e){switch(n=[],typeof e){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(e||"map"),t);break;case"object":t(e);break;default:throw new TypeError("Unexpected data type ("+typeof e+").")}return n}}"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e():window.imageMapResize=e(),"jQuery"in window&&(window.jQuery.fn.imageMapResize=function(){return this.filter("map").each(r).end()})}();
//# sourceMappingURL=imageMapResizer.map

imageMapResize();
$('map').imageMapResize();
$(document).ready(function() {
    $('map').imageMapResize();
});

;(function () {
    var src = './eruda.min.js';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();

function w3_close() {
  $("#mySidebar").css("display","none");
}

function w3_open() {
  $("#mySidebar").css("display","block");
}