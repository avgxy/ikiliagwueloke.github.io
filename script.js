// Scroll Functions
window.onscroll = function() {
  scrollFunction();
  headerHide();
};

var mybutton = document.getElementById("top-button");
var oldScrollPos = window.pageYOffset;

// Hide header on scroll
function headerHide() {
  let newScrollPos = window.pageYOffset;
    if (oldScrollPos > newScrollPos) {
        document.getElementById("grid-header").style.top = "0";
    } else {
        document.getElementById("grid-header").style.top = "-100px";
      }
  oldScrollPos = newScrollPos;
}

// Show back to top button on scroll
function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight/2 || document.documentElement.scrollTop > window.innerHeight/2) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Smooth anchor link scroll (From W3School)
$(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      }
    });
});