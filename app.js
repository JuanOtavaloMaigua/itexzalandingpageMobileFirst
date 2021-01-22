//Codigo para el creacion del slider en mobile
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider_container_slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].style.backgroundColor = "#1458AA";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].style.backgroundColor = "#F50006";

  dots[slideIndex-1].className += " active";
} 



var slideIndexCopy= 1
var slidesCopy = document.getElementsByClassName("somos_varios_container_slider")

function automateSlider(){
    for(i=0; i< slidesCopy.length; i++){
        slidesCopy[i].style.display = "none"
    }
    slidesCopy[slideIndexCopy].style.display = "grid"

    slideIndexCopy++
    if(slideIndexCopy == (slidesCopy.length)){ slideIndexCopy = 0}

    setTimeout(automateSlider, 3000)  
}


function initMap() {
  // The location of Uluru
  // 0.231701, -78.259124
  const uluru = { lat: 0.231701, lng:-78.259124};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}



automateSlider()
initMap()