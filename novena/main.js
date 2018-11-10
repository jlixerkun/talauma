var toggler = document.getElementById('toggler');
var menuItems = [...document.getElementsByClassName('menu-item')];
const topOfNav = toggler.offsetTop;
const mainMenu = document.getElementById('mainMenu');
const header = document.getElementById('mainHeader');
var anchors = [...document.getElementsByClassName('anchor')];
var links = [...document.getElementsByClassName('inpage-link')];
var btmTogglers = [...document.getElementsByClassName('slide-panel__toggle')];
var linker = document.getElementById('orate');

Object.defineProperty(Element.prototype, 'documentOffsetTop', {
   get: function () {
      return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop : 0);
   }
});

// linker.addEventListener('click', function(e){
//    // document.getElementById('oraciones').scrollIntoView();
   
//    var topElem = document.getElementById('oraciones').documentOffsetTop;
//    if (window.scrollY > topElem) {
//       window.scrollTo(0, topElem - 120);
//    } else {
//       window.scrollTo(0, topElem - 30);
//    }
//    e.preventDefault();
// });

links.forEach( link => link.addEventListener('click', function(e){
   var targetTop = document.getElementById(this.dataset.target).documentOffsetTop;
   if (window.scrollY > targetTop) {
      window.scrollTo(0, targetTop - 120);
   } else {
      window.scrollTo(0, targetTop - 30);
   };
   e.preventDefault();
}));

function gotoElement(id){
   var topElem = document.getElementById(id).documentOffsetTop;
   if (window.scrollY > topElem) {
      window.scrollTo(0, topElem - 120);
   } else {
      window.scrollTo(0, topElem - 30);
   }
}


var imgs = [
   'assets/tree.svg', 
   'assets/ball.svg', 
   'assets/bell.svg', 
   'assets/calendar.svg', 
   'assets/candle.svg', 
   'assets/deer.svg', 
   'assets/fireworks.svg', 
   'assets/flower.svg', 
   'assets/gift.svg', 
   'assets/mistletoe.svg', 
   'assets/snowflake.svg', 
   'assets/sock.svg', 
   'assets/star.svg', 
   'assets/tree.svg'];
      
   var gozos = [...document.getElementsByClassName('gozo')];
   for (i in gozos) {
      var imageContainer = document.createElement('div');
      imageContainer.classList.add('imgContainer');
      var image = document.createElement('img');
      image.src = imgs[i];
      image.width = 32;
      imageContainer.appendChild(image)
      gozos[i].appendChild(imageContainer);
   }
// setTimeout(function () { 
// }, 900);


window.onscroll = function (e) {
   // print "false" if direction is down and "true" if up
   // console.log(this.oldScroll > this.scrollY);
   console.log(this.scrollY);
   // this.oldScroll < this.scrollY ? header.classList.add('hide') : header.classList.remove('hide');
   // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
   this.oldScroll < this.scrollY ? hideHeader() : showHeader();
   this.oldScroll = this.scrollY;
}

function hideHeader() {
   header.classList.add('hide');
}
function showHeader() {
   header.classList.remove('hide');
}
function toggleMenu() {
   mainMenu.classList.toggle('visible');
}

function includeHTML() {
   var z, i, elmnt, file, xhttp;
   /*loop through a collection of all HTML elements:*/
   z = document.getElementsByTagName("*");
   for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
         /*make an HTTP request using the attribute value as the file name:*/
         xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
               if (this.status == 200) { elmnt.innerHTML = this.responseText; }
               if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
               /*remove the attribute, and call this function once more:*/
               elmnt.removeAttribute("w3-include-html");
               includeHTML();
            }
         }
         xhttp.open("GET", file, true);
         xhttp.send();
         /*exit the function:*/
         return;
      }
   }
}
includeHTML();

// menuItems.forEach(item => item.addEventListener('click', function (e) {
//    mainMenu.classList.toggle('visible');
//    e.preventDefault();
//    }
// ));

btmTogglers.forEach(toggler => toggler.addEventListener('click', function(e){
   var panelId = this.dataset.panel;
   document.getElementById(panelId).classList.toggle('visible');
   e.preventDefault();
}));

toggler.addEventListener('click', function (e) {
   mainMenu.classList.toggle('visible');
   e.preventDefault();
});  