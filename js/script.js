const burger = document.querySelector('.navbar-toggler')
const bars = document.querySelector('.fa-bars')
const times = document.querySelector('.fa-times')

burger.addEventListener('click', function() {
    bars.classList.toggle('visible')
    times.classList.toggle('visible')
})