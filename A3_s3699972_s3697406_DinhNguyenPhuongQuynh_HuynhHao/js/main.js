$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

  
      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-default");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
(function ($) {
  $(document).ready(function(){
    
  // hide .navbar first
  $("#navbar").show();
  $("#header").show();
  
  
  // fade in .navbar

  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
      if ($(this).scrollTop() > 100) {
        $('#header').fadeOut();
      } else {
        $('#header').fadeIn();
      }
      
    });

  
  });

});
  }(jQuery));

$(document).scroll(function() {
  var st = $(this).scrollTop();
  $("#header").css({
    "background-position-y": (-st/20)
  })
  $("#headerc").css({
    "top": (-st/5),
    "bottom": (st/5)
  })
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var wrapper = $('.wrapper-carousel');
  function carousel(){
    var itemActive = wrapper.find(".items.active");
    if(itemActive.next().length>0){
         itemActive.removeClass('active').next().addClass('active'); 
    }
    else {
      itemActive.removeClass('active');
      $(".items").eq(0).addClass('active');
    }
  }
  setInterval(carousel,3000);