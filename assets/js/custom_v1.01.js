/* ------------------------------------------------ */
// notification for old browsers
var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,unsupported:true,api:5};
function $buo_f(){
 var e = document.createElement("script");
 e.src = "//browser-update.org/update.min.js";
 document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}

/* ------------------------------------------------ */
// hide side menu on top and show on scrolling
$(function() {
  upDown();
});

$(window).scroll(function() {
  var winScrollTop = $(window).scrollTop();
  var winHeight = $(window).height();
  var docHeight = $(document).height();

  if (winScrollTop > 0) {
    $("#asideLeftLogo").removeClass("disable");
    $("#rightMenuNavbar").removeClass("disable");
    if (winScrollTop == docHeight - winHeight && $("#rightMenuNavbar").css("display") == "block") {
      $("#asideLeftLogo").removeClass("disable");
      $("#rightMenuNavbar").removeClass("disable");
    }
  } else {
    $("#asideLeftLogo").addClass("disable");
    $("#rightMenuNavbar").addClass("disable");
  }
});

function upDown() {
  var winScrollTop = $(window).scrollTop();

  if (winScrollTop === 0) {
    $("#asideLeftLogo").addClass("disable");
    $("#rightMenuNavbar").addClass("disable");
  }

  $("scrollBtnContainer a").click(function(e) {
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var speed = 600;

    if (!$(this).hasId("backToTop")) {
      $("html,body").stop().animate({
        scrollTop: docHeight - winHeight
      }, speed);
    } else {
      $("html,body").stop().animate({
        scrollTop: 0
      }, speed);
    }
    e.preventDefault();
  });
}
/* ------------------------------------------------ */
// Smoth scrolling
// // Select all links with hashes
// $('a[href*="#"]')
//   // Do not select links that don't actually link to anything
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

/* ------------------------------------------------ */
/* When user chooses the language */
function chooseLanguage() {
  // Hide Language element after choosing
  document.getElementById("languagePg").style.display = "none";

  // make visible the choose layout element
  document.getElementById("chooseLayout").style.display = "block";
}


/* ------------------------------------------------ */
/* Hide details after choosing close*/
function closeDetails2018() {
    document.getElementById("year2018").open = false;
}
function closeDetails2017() {
    document.getElementById("year2017").open = false;
}
function closeDetails2016() {
    document.getElementById("year2016").open = false;
}
function closeDetails2015() {
    document.getElementById("year2015").open = false;
}
function closeDetailsRightMenu() {
    document.getElementById("rightMenuNavbar").open = false;
}
