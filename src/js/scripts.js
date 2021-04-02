// swipper1
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 3500,
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

// swipper2
var swiper = new Swiper('.swiper-container-2', {
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
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

// Afficher les fleches lors du survol
let swiperWrapper = document.querySelectorAll('.swiper-container');
let arrows = document.querySelectorAll('.arrows');

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
// new simpleParallax(image);
new simpleParallax(image, {
	scale: 1.5
});

document.addEventListener('DOMContentLoaded', function () {


  // white navigation

  let navigation = document.querySelector('nav');
  let logo1 = document.querySelector('.logo1');

  window.addEventListener('scroll', function () {

    let alreadyScrolled = window.pageYOffset;
    if (alreadyScrolled > navigation.clientHeight) {
      navigation.classList.add('white-nav');
      logo1.src = "img/icons/logo2.png";



    } else {
      navigation.classList.remove('white-nav');
      logo1.src = "img/icons/logo.png";

    }
  })
})

//side-menu

let sideMenu = document.querySelector('.side-menu');
let burgerMenu = document.querySelector('.burger-menu');
let out = document.querySelector('.out');
let blackFilter = document.querySelector('.header');
console.log(blackFilter);

burgerMenu.addEventListener('click', function () {
  sideMenu.classList.add('reveal');
  blackFilter.classList.add('visible');
})
out.addEventListener('click', function () {
  sideMenu.classList.remove('reveal');
  blackFilter.classList.remove('visible');
})

// Magnific Popup

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 100,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,
		fixedContentPos: false
	});
});

//gallery
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			
		}
	});
});

//isotope
$("#monDiv").hover(function(e){
  console.log('Survol du DIV')
}, function(e){
  console.log('Quitte le DIV')
})




// external js: isotope.pkgd.js

// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
  getSortData: {
    name: ".name",
    symbol: ".symbol",
    number: ".number parseInt",
    category: "[data-category]",
    weight: function (itemElem) {
      var weight = $(itemElem).find(".weight").text();
      return parseFloat(weight.replace(/[\(\)]/g, ""));
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find(".number").text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find(".name").text();
    return name.match(/ium$/);
  }
};

// bind filter button click
$("#filters").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$("#sorts").on("click", "button", function () {
  var sortByValue = $(this).attr("data-sort-by");
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});
