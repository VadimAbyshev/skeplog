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
    1192: {
        slidesPerView: 2,
        spaceBetween: 20
    }
}

});



const accordion = document.querySelector('.accordion');
const accordionOpenButton = document.querySelector('.question__info-button');

const burgerButton = document.querySelector('.navigation__burger')
const buergerMenu = document.querySelector('.navigation__nav')


function openBurgerMenu(){
  buergerMenu.classList.add('navigation_nav_open')
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
accordionOpenButton.addEventListener('click', openАccordion)
