var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let swiperWrapper= document.querySelector('.swiper-wrapper');
  let arrows= document.querySelector('.arrows');

swiperWrapper.addEventListener('mouseenter', function () {
  arrows.classList.remove('display'); 
})
// swiperWrapper.addEventListener('mouseleave', function () {
//   arrows.classList.add('display'); 
// })

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);