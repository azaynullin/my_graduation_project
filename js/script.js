//FLOATING ELEMENTS
$(document).ready(function(){
	$('.float-elements__item').removeClass('float-elements__item_off-the-screen_1');
	$('.float-elements__item').removeClass('float-elements__item_off-the-screen_2');
	$('.float-elements__item').removeClass('float-elements__item_off-the-screen_3');
	$('.float-elements__item').removeClass('float-elements__item_off-the-screen_4');
	$('.float-elements__item').removeClass('float-elements__item_off-the-screen_5');
});

//SWIPER
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1160: {
          slidesPerView: 2,
          spaceBetween: 35,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
      	1024: {
      		slidesPerView: 2,
      		spaceBetween: 35,
      		slidesPerGroup: 2,
      		loop: true,
      		loopFillGroupWithBlank: false,
      		pagination: {
      			el: '.swiper-pagination',
      			clickable: true,
      		},
      		navigation: {
      			nextEl: false,
      			prevEl: false,
      		},
      	},
      	992: {
      		slidesPerView: 2,
      		spaceBetween: 30,
      		slidesPerGroup: 3,
      		loop: true,
      		pagination: {
      			el: '.swiper-pagination',
      			clickable: true,
      		},
      	},
      	768: {
      		slidesPerView: 2,
      		spaceBetween: 30,
      		slidesPerGroup: 3,
      		loop: true,
      		pagination: {
      			el: '.swiper-pagination',
      			clickable: true,
      		},
      	},
      	575: {
      		slidesPerView: 1,
      		slidesPerGroup: 1,
      		loop: true,
      		pagination: {
      			el: '.swiper-pagination',
      			clickable: true,
      		}
      	}
      }
    });

//MOBILE MENU CONTAINER
$("#menuButton").on('click', function() {
    $("#popUpMenuContainer").show();
});

$("#deleteButton").on('click', function (){
    $('#popUpMenuContainer').hide();
});

//SMOOTH SCROLL
$(document).ready(function(){
    $('.go-to').click( function(){ // ловим клик по ссылке с классом go-to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});