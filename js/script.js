// const burger = document.querySelector('.navbar-toggler')
// const bars = document.querySelector('.fa-bars')
// const times = document.querySelector('.fa-times')

// burger.addEventListener('click', function() {
//     bars.classList.toggle('visible')
//     times.classList.toggle('visible')
// })

const burger = document.querySelector('.burger')
const burgerLine1 = document.querySelector('.burger__line--line1')
const burgerLine2 = document.querySelector('.burger__line--line2')
const burgerLine3 = document.querySelector('.burger__line--line3')

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	burgerLine1.classList.toggle('js-burger__line1--active')
	burgerLine2.classList.toggle('js-burger__line2--active')
	burgerLine3.classList.toggle('js-burger__line3--active')
})
