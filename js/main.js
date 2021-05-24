$(document).ready(function(){
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 8000,
    autoplayHoverPause: true,
    slideTransition: "linear",
    items: 2,
    nav: false,
    dots: true,
  
    responsive: {
        0: {
            items:1,
        } ,
        600: {
            items:2,
        } ,
        900: {
            items:3
        } ,
    },
  });
  