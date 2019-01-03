//burgerMenu
var burgerDiv = document.getElementsByClassName('burgerDiv')[0];
var burgerMenuOverlayWhite = document.getElementsByClassName('burgerMenuOverlayWhite')[0];
var burgerOverlayBlackBox = document.getElementsByClassName('burgerOverlayBlackBox')[0];
var wholePageOverlay = document.getElementsByClassName('wholePageOverlay')[0];
var closeBox = document.getElementsByClassName('closeBox')[0];
burgerDiv.addEventListener('click',function(){
  burgerMenuOverlayWhite.style.width = "100%"
  wholePageOverlay.style.filter = 'blur(10px)'
  setTimeout(function(){
    burgerOverlayBlackBox.style.width = '20vw'
  },1000)
})

closeBox.addEventListener('click',function(){
  burgerMenuOverlayWhite.style.width = "0%"
  wholePageOverlay.style.filter = 'blur(0px)'
  setTimeout(function(){
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
