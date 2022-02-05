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

const footerYear = document.querySelector('.footer-year')

const nav = document.querySelector('.navbar-collapse')
const menuAllLinks = document.querySelectorAll('.nav-link')

const setCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

setCurrentYear()

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	burgerLine1.classList.toggle('js-burger__line1--active')
	burgerLine2.classList.toggle('js-burger__line2--active')
	burgerLine3.classList.toggle('js-burger__line3--active')
})

const hideNav = () => {
	menuAllLinks.forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('show')
			burger.classList.remove('active')
			burgerLine1.classList.remove('js-burger__line1--active')
			burgerLine2.classList.remove('js-burger__line2--active')
			burgerLine3.classList.remove('js-burger__line3--active')
		})
	})
}

hideNav()
