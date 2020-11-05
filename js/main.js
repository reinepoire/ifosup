$(function () {
    // démarage auto de la vidéo dans le modal
    $('.video').click(function () {
        var leModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + 
                "?modestbranding=1&rel=1&controls=1&showinfo=0&html5=1&autoplay=1";
    $(leModal + ' iframe').attr('src', videoSRCauto);
    $(leModal + 'button.close').click( function () {
            $(leModal + ' iframe').attr('src', videoSRC);
        })
    })
});

// active le lightbox sur toutes les images
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightboc();
});

// 
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
})

// slide show news
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}