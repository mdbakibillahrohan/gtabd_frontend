
$(document).ready(function(){
    $(".lightening-carousel").owlCarousel({
      loop: false,
      autoplay: true,
      autoplayHoverPause:true,
      items: 4,
      margin: 35,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
        
     ],
     responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
    });
  });