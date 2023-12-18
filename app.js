function myFunction() {
    var e = document.getElementById("myTopnav");
    "topnav" === e.className ? e.className += " responsive" : e.className = "topnav"
}

function ifoff() {
    var e = document.getElementById("myTopnav");
    "responsive" === e.className ? e.className -= " responsive" : e.className = "topnav"
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
  
}
var acc2 = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < acc2.length; i++) {
  acc2[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active2");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let slideIndex = 1;
let slideTimer; // Variable to store the timeout

showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(slideTimer); // Clear existing timeout
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(slideTimer); // Clear existing timeout
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { 
    slideIndex = 1;
  }
  if (n < 1) { 
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activet", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " activet";

  slideTimer = setTimeout(() => { plusSlides(1) }, 12000); // Change slide every 12 seconds
}

document.addEventListener("DOMContentLoaded", showSlides); // Start the slideshow on page load
