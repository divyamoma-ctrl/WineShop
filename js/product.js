var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
          loop: true,
    grabcursor: true,
   
    // Breakpoints : 
    
      breakpoints: {
    0:{
      slidesPerView: 1,
       },
    768: {
        slidesPerView: 2,
    },   
    992: {
        slidesPerView: 3,
    },
    1200: {
       slidesPerView: 3,
      },
    1400: {
        slidesPerView: 4,
      }   
    }});

   