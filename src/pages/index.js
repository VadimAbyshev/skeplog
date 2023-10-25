const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {// настройки для разных разрешений
    768: {
        slidesPerView: 'auto',
        spaceBetween: 8
    },
    1050: {
        slidesPerView: 1,
        spaceBetween: 8
    },
    1060: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesPerView: 'auto',
    }
},
// autoplay: {
//   delay: 1000,
// },

});



const accordion = document.querySelector('.accordion');
const accordionOpenButton = document.querySelector('.question__info-button');

const burgerButton = document.querySelector('.navigation__burger')
const buergerMenu = document.querySelector('.navigation__nav')
const closeBurgerButtton = document.querySelector('.navigation__burger-close')

function openBurgerMenu(){
  buergerMenu.classList.add('navigation_nav_open')
}
function closeBurgerMenu(){
  buergerMenu.classList.remove('navigation_nav_open')
}
// function openАccordion(){
//   accordion.forEach(element => {
//     element.classList.toggle('accordion_opened');
    
//   })
//   accordionOpenButton.classList.toggle('question__info-button_open')
// };


function openАccordion(){
  accordion.classList.toggle('accordion_opened');
        accordionOpenButton.classList.toggle('question__info-button_open')

  
}  
burgerButton.addEventListener('click', openBurgerMenu)
closeBurgerButtton.addEventListener('click', closeBurgerMenu)
accordionOpenButton.addEventListener('click', openАccordion)
