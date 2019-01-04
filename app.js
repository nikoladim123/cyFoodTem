//burgerMenu
var burgerDiv = document.getElementsByClassName('burgerDiv')[0];
var burgerMenuOverlayWhite = document.getElementsByClassName('burgerMenuOverlayWhite')[0];
var burgerOverlayBlackBox = document.getElementsByClassName('burgerOverlayBlackBox')[0];
var wholePageOverlay = document.getElementsByClassName('wholePageOverlay')[0];
var closeBox = document.getElementsByClassName('closeBox')[0];
burgerDiv.addEventListener('click',function(){
  burgerMenuOverlayWhite.style.width = "100%"
  setTimeout(function(){
    burgerOverlayBlackBox.style.width = '20vw'
    wholePageOverlay.style.filter = 'blur(10px)'
  },1000)
})

closeBox.addEventListener('click',function(){
  wholePageOverlay.style.filter = 'blur(0px)'
  setTimeout(function(){
    burgerMenuOverlayWhite.style.width = "0%"
    burgerOverlayBlackBox.style.width = '0vw'
  },700)
})


//Glimmer light animation fail.
var threePicDivClass = document.getElementsByClassName('threePicDivClass');
var glanceDiv = document.getElementsByClassName('glanceDiv');

var swch=1;
threePicDivClass[0].addEventListener('mouseover',function(){
  if(swch){
    glanceDiv[0].style.top = '100%';
    glanceDiv[0].style.left = '100%';
    swch=0;
    setTimeout(function(){
      glanceDiv[0].style.top = '-100%';
      glanceDiv[0].style.left = '-10%';
      swch=1;
    },1500)
  }
});

var swchOne=1;
threePicDivClass[1].addEventListener('mouseover',function(){
  if(swchOne){
    glanceDiv[1].style.top = '100%';
    glanceDiv[1].style.left = '100%';
    swchOne=0;
    setTimeout(function(){
      glanceDiv[1].style.top = '-100%';
      glanceDiv[1].style.left = '-10%';
      swchOne=1;
    },1500)
  }
});

var swchTwo=1;
threePicDivClass[2].addEventListener('mouseover',function(){
  if(swchTwo){
    glanceDiv[2].style.top = '100%';
    glanceDiv[2].style.left = '100%';
    swchTwo=0;
    setTimeout(function(){
      glanceDiv[2].style.top = '-100%';
      glanceDiv[2].style.left = '-10%';
      swchTwo=1;
    },1500)
  }
});
// cheap animation Bolero grill and bar
var main = document.getElementsByClassName('mainMain')[0];
var yellowBoxBar = document.getElementsByClassName('yellowBoxBar')[0];

var getinTouchImageBox = document.getElementsByClassName('getinTouchImageBox')[0];
var getInTouchYellowBox = document.getElementsByClassName('getInTouchYellowBox')[0];

window.onscroll = function(){
    if(main.getBoundingClientRect().top - window.innerHeight <= 0){
      yellowBoxBar.style.backgroundColor = '#f0cd3c';
    }
    //cheap animation contact
    if(getinTouchImageBox.getBoundingClientRect().top - (window.innerHeight/1.5)<= 0){
      getInTouchYellowBox.style.backgroundColor = 'rgb(217,185,86)';
    }
    threeGlasAnim();
    specialsAnim();
}
//3 pic glass animation
var threePicDiv = document.getElementsByClassName('threePicDiv')[0];
var barSection = document.getElementsByClassName('barSection')[0];
function threeGlasAnim(){
  if(barSection.getBoundingClientRect().top - (window.innerHeight/5)<= 0){
    threePicDiv.style.bottom = '0'
  }
}
//specials reveal anim specials connectWithUsParagraph
var specials = document.getElementsByClassName('specials')[0];
var connectWithUsParagraph = document.getElementsByClassName('connectWithUsParagraph')[0];
function specialsAnim(){
  if(specials.getBoundingClientRect().top - (window.innerHeight/1.5)<= 0){
    specials.style.backgroundPosition = '0 0';
    connectWithUsParagraph.style.top = '0';
  }
}
