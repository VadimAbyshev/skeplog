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
autoplay: {
  delay: 1000,
},

});



const accordion = document.querySelector('.accordion');
const accordionOpenButton = document.querySelectorAll('.question__info-button');

const burgerButton = document.querySelector('.burger-button')
const burgerButto = document.querySelector('.footer__burger')

const buergerMenu = document.querySelector('.navigation__nav')
const closeBurgerButtton = document.querySelector('.navigation__burger-close')

function openBurgerMenu(){
  buergerMenu.classList.add('navigation_nav_open')
}
function closeBurgerMenu(){
  buergerMenu.classList.remove('navigation_nav_open')
}

const btnUp = document.querySelector('.footer__up');
btnUp.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});




const popupSendPriceTelegram = document.querySelector('.popup__send-telegram')
const popupSendPriceWhatsapp = document.querySelector('.popup__send-whatsapp')
const popupSendQuestion = document.querySelector('.popup__send-question')
const popupSendDiscount = document.querySelector('.popup__send-discount')


const telegramSendButton = document.querySelectorAll('.price__button-telegram')
const whatsappSendButton = document.querySelectorAll('.price__button-whatsapp')
const questionSendButton = document.querySelectorAll('.support__button-popup')
const discountSendButton = document.querySelectorAll('.discound-send')

const closePopupButton = document.querySelectorAll('.popup__close-button')

discountSendButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendDiscount.classList.add('popup_opened')
  })
})

closePopupButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendDiscount.classList.remove('popup_opened')
  })
})



questionSendButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendQuestion.classList.add('popup_opened')
  })
})

closePopupButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendQuestion.classList.remove('popup_opened')
  })
})



whatsappSendButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendPriceWhatsapp.classList.add('popup_opened')
  })
})

closePopupButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendPriceWhatsapp.classList.remove('popup_opened')
  })
})

telegramSendButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendPriceTelegram.classList.add('popup_opened')
  })
})

closePopupButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    popupSendPriceTelegram.classList.remove('popup_opened')
  })
})


accordionOpenButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
      elem.parentNode.querySelector('.accordion').classList.toggle('accordion_opened')
      elem.parentNode.querySelector('.question__info-button').classList.toggle('question__info-button_open')
  })
})



burgerButton.addEventListener('click', openBurgerMenu)
burgerButto.addEventListener('click', openBurgerMenu)

closeBurgerButtton.addEventListener('click', closeBurgerMenu)


// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  
//   return {
//     'total': t,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }
 
// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);

//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');
 
//   function updateClock() {
//     var t = getTimeRemaining(endtime);
 
//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }
 
//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }
 
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
// initializeClock('countdown', deadline);