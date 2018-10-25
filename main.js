// TweenMax.to('.myPic',2,{scale:2,y:-150, ease:Elastic.easeOut});

//instantiate a TimelineLite    
var tl = new TimelineLite();
var btn = document.querySelectorAll('.btnGo');


// window.setTimeout(function(){
//    TweenMax.staggerTo(btn, 3, { scale:1.5, y:20, ease: Elastic.easeOut });
// },1000);

var menu = document.getElementById('menu');
var toggler = document.getElementById('menuToggler');
// var tl = new TimeLineLite();
toggler.addEventListener('click',
   function(){
      if(!menu.classList.contains('shown')){
         menu.classList.add('shown');
         // tl.to(menu, 1.5, { x: 23 + 'vw', ease: Elastic.easeOut.config(1, 0.5) });
         tl.to(menu, 1.5, { x: 23 + 'vw', ease: Power3.easeOut});
      } else {
         menu.classList.remove('shown');
         tl.to(menu, 2, { x: 100 + 'vw' });
      }
   }
);
   