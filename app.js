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
