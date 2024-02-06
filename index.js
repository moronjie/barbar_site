const menuBtn = document.getElementById('menuBtn')
const closeBtn = document.querySelector("#close")
const sideNav = document.querySelector(".sideNav")

menuBtn.addEventListener('click', ()=>{
    sideNav.classList.add('slide-in')
})

closeBtn.addEventListener('click', ()=>{
    sideNav.classList.remove("slide-in")
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});