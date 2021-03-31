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

let swiperWrapper = document.querySelectorAll('.swiper-container');
let arrows = document.querySelectorAll('.arrows');
console.log(arrows);

for (let i = 0; i < swiperWrapper.length; i++) {

  swiperWrapper[i].addEventListener('mouseenter', function () {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].classList.remove('invisible');
    }

  })
  swiperWrapper[i].addEventListener('mouseleave', function () {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].classList.add('invisible');
    }
  })
}


//parallax
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);

document.addEventListener('DOMContentLoaded', function () {


  // white menu

  let navigation = document.querySelector('nav');
  let logo1 = document.querySelector('.logo1');




  window.addEventListener('scroll', function () {

    let alreadyScrolled = window.pageYOffset; // Position (en cours) du scrol
    if (alreadyScrolled > navigation.clientHeight) {
      navigation.classList.add('white-nav');
      logo1.src = "img/icons/logo2.png";



    } else {
      navigation.classList.remove('white-nav');
      logo1.src = "img/icons/logo.png";

    }
  })













})