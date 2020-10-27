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

// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
