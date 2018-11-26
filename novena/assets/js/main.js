var toggler = document.getElementById("toggler");
var closers = [...document.getElementsByClassName("closeMenu")];
var menuItems = [...document.getElementsByClassName("menu-item")];
const topOfNav = toggler.offsetTop;
const mainMenu = document.getElementById("mainMenu");
const header = document.getElementById("mainHeader");
var anchors = [...document.getElementsByClassName("anchor")];
var links = [...document.getElementsByClassName("inpage-link")];
var btmTogglers = [...document.getElementsByClassName("slide-panel__toggle")];
var linker = document.getElementById("orate");
const btmMenu = document.getElementById("menuBottomDia");

Object.defineProperty(Element.prototype, "documentOffsetTop", {
  get: function() {
    return (
      this.offsetTop +
      (this.offsetParent ? this.offsetParent.documentOffsetTop : 0)
    );
  }
});


links.forEach(link =>
  link.addEventListener("click", function(e) {
    var targetTop = document.getElementById(this.dataset.target)
      .documentOffsetTop;
    if (window.scrollY > targetTop) {
      window.scrollTo(0, targetTop - 120);
    } else {
      window.scrollTo(0, targetTop - 30);
    }
    e.preventDefault();
  })
);

function gotoElement(id) {
  var topElem = document.getElementById(id).documentOffsetTop;
  if (window.scrollY > topElem) {
    window.scrollTo(0, topElem - 120);
  } else {
    window.scrollTo(0, topElem - 30);
  }
}

var imgs = [
  "assets/img/tree.svg",
  "assets/img/ball.svg",
  "assets/img/bell.svg",
  "assets/img/calendar.svg",
  "assets/img/candle.svg",
  "assets/img/deer.svg",
  "assets/img/fireworks.svg",
  "assets/img/flower.svg",
  "assets/img/gift.svg",
  "assets/img/mistletoe.svg",
  "assets/img/snowflake.svg",
  "assets/img/sock.svg",
  "assets/img/star.svg",
  "assets/img/tree.svg"
];

var gozos = [...document.getElementsByClassName("gozo")];
for (i in gozos) {
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("imgContainer");
  var image = document.createElement("img");
  image.src = imgs[i];
  image.width = 32;
  imageContainer.appendChild(image);
  gozos[i].appendChild(imageContainer);
}

window.onscroll = function(e) {
//   console.log(this.scrollY);
  this.oldScroll < this.scrollY ? hideHeader() : showHeader();
  this.oldScroll = this.scrollY;
};

function hideHeader() {
  header.classList.add("hide");
}
function showHeader() {
  header.classList.remove("hide");
}
function toggleMenu() {
  mainMenu.classList.toggle("visible");
}

btmTogglers.forEach(toggler =>
  toggler.addEventListener("click", function(e) {
    var panelId = this.dataset.panel;
    document.getElementById(panelId).classList.toggle("visible");
    e.preventDefault();
  })
);

toggler.addEventListener("click", function(e) {
  mainMenu.classList.toggle("visible");
  e.preventDefault();
});

closers.forEach(closer =>
  closer.addEventListener("click", function(e) {
    mainMenu.classList.toggle("visible");
    e.preventDefault();
  })
);

var elements = document.getElementsByClassName(".sub-menu__item.dia");
