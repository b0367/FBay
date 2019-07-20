var slideIndex = 0;

function showSlides(){
  var i;
  var slide = document.getElementsByClassName("slideshow-item");
  for(i = 0; i < slide.length; i++){
    slide[i].style.display = "none";  
  }
slideIndex++;
  if(slideIndex>slide.length){slideIndex=1;}
  slide[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, Math.random()*6000);
}

showSlides();