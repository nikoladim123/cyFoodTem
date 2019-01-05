//burgerMenu
var burgerDiv = document.getElementsByClassName('burgerDiv');
var burgerMenuOverlayWhite = document.getElementsByClassName('burgerMenuOverlayWhite')[0];
var burgerOverlayBlackBox = document.getElementsByClassName('burgerOverlayBlackBox')[0];
var wholePageOverlay = document.getElementsByClassName('wholePageOverlay')[0];
var closeBox = document.getElementsByClassName('closeBox')[0];
var stickySwitch = 0;
burgerDiv[0].addEventListener('click',function(){
  stickySwitch =1;
  burgerMenuOverlayWhite.style.width = "100%";
  stickyMenu.style.height = '0vw';
  setTimeout(function(){
    burgerOverlayBlackBox.style.width = '20vw';
    wholePageOverlay.style.filter = 'blur(10px)';
  },1000)
})
burgerDiv[1].addEventListener('click',function(){
  stickySwitch =1;
  burgerMenuOverlayWhite.style.width = "100%";
  stickyMenu.style.height = '0vw';
  setTimeout(function(){
    burgerOverlayBlackBox.style.width = '20vw';
    wholePageOverlay.style.filter = 'blur(10px)';
  },1000)
})

closeBox.addEventListener('click',function(){
  closeBoxFun();
});
function closeBoxFun(){
  stickySwitch = 0;
  wholePageOverlay.style.filter = 'blur(0px)';
  setTimeout(function(){
    burgerMenuOverlayWhite.style.width = "0%";
    burgerOverlayBlackBox.style.width = '0vw';
  },700)
}
//<a> slider close on click
var closeMeClass = document.getElementsByClassName('closeMeClass');
for(var i=0;i<closeMeClass.length;i++){
  closeMeClass[i].addEventListener('click',function(){
    closeBoxFun();
  });
}
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

//WINDOW ONSCROLL FUNCTION CALLLL
window.onscroll = function(e){
    if(main.getBoundingClientRect().top - window.innerHeight <= 0){
      yellowBoxBar.style.backgroundColor = '#f0cd3c';
    }
    //cheap animation contact
    if(getinTouchImageBox.getBoundingClientRect().top - (window.innerHeight/1.5)<= 0){
      getInTouchYellowBox.style.backgroundColor = 'rgb(217,185,86)';
    }

    threeGlasAnim();
    specialsAnim();
    yellowBoxAnim();
    fromTheSectionAnim();
    kidsMenuAnim();
    ourMenuAnim();
    shroomsAnim();
    cateringAnimm();
    stickyMenuFunc();
}
//3 pic glass animation
var threePicDiv = document.getElementsByClassName('threePicDiv')[0];
var barSection = document.getElementsByClassName('barSection')[0];
function threeGlasAnim(){
  if(barSection.getBoundingClientRect().top - (window.innerHeight/5)<= 0){
    threePicDiv.style.bottom = '0'
  }
}
//Bolero first banner paragraph animation
var grillTextAnimOneParagraph = document.getElementsByClassName('grillTextAnimOneParagraph')[0];
var grillTextAnimTwoParagraph = document.getElementsByClassName('grillTextAnimTwoParagraph')[0];
function bannerOneParagraph(){
  grillTextAnimOneParagraph.style.top = '0';
  grillTextAnimTwoParagraph.style.top = '0';
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
//yellow box heading animation paragraph
var yellowParaAnimOne = document.getElementsByClassName('yellowParaAnimOne')[0];
var yellowParaAnimTwo = document.getElementsByClassName('yellowParaAnimTwo')[0];
function yellowBoxAnim(){
  if(yellowParaAnimOne.getBoundingClientRect().top - (window.innerHeight/1.1)<= 0){
    yellowParaAnimOne.style.top = '0';
    yellowParaAnimTwo.style.top = '0';
  }
}
//from THE section
var fromTheSectionParagAnim = document.getElementsByClassName('fromTheSectionParagAnim')[0];
var barPic = document.getElementsByClassName('barPic')[0];
function fromTheSectionAnim(){
  if(barPic.getBoundingClientRect().top - (window.innerHeight/1.2)<= 0){
    fromTheSectionParagAnim.style.top = '0';
    barPic.style.backgroundPosition = '0 0';
  }
}
//OUR KIDS section imageSection
var imageSectionParagAnim = document.getElementsByClassName('imageSectionParagAnim')[0];
var menuPng = document.getElementsByClassName('menuPng')[0];
function kidsMenuAnim(){
  if(menuPng.getBoundingClientRect().top - (window.innerHeight/1.2)<= 0){
    imageSectionParagAnim.style.top = '0';
    menuPng.style.backgroundPosition = '0 0';
  }
}
//OUR MENU sectionImageTwo
var imageSectionTwoParagAnim = document.getElementsByClassName('imageSectionTwoParagAnim')[0];
var blackBandMenuText = document.getElementsByClassName('blackBandMenuText')[0];
function ourMenuAnim(){
  if(blackBandMenuText.getBoundingClientRect().top - (window.innerHeight/1.2)<= 0){
    imageSectionTwoParagAnim.style.top = '0';
    blackBandMenuText.style.backgroundPosition = '0 0';
  }
}
//CATTERING SECTION
var cateringParagAnim = document.getElementsByClassName('cateringParagAnim')[0];
var events = document.getElementsByClassName('events')[0];
function cateringAnimm(){
  if(cateringParagAnim.getBoundingClientRect().top - (window.innerHeight/1.2)<= 0){
    cateringParagAnim.style.top = '0';
    events.style.backgroundPosition = '0 0';
  }
}
//Animate his lemons and mushrooms
var lemon = document.getElementsByClassName('lemon')[0];
var mushroom = document.getElementsByClassName('mushroom')[0];
function shroomsAnim(){
  if(mushroom.getBoundingClientRect().top - (window.innerHeight/1.2)<= 0){
    lemon.style.left = '0';
    mushroom.style.right = '16.592vw';
  }
}
//STYCKY Menu
var stickyMenu = document.getElementsByClassName('stickyMenu')[0];
function stickyMenuFunc(){
  if(this.oldScroll > this.scrollY && window.scrollY > 1 && stickySwitch===0){
    stickyMenu.style.height = '7.2vw';
  }
  else {
    stickyMenu.style.height = '0vw';
  }
  this.oldScroll = this.scrollY;
}

//window onload
window.onload = function(){
  bannerOneParagraph();
}
