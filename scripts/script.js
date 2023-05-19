const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')


menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active')
    menu.classList.toggle('active')
})

window.addEventListener('resize', function() {
    if (window.innerWidth >= 992) {
        menuIcon.classList.remove('active')
        menu.classList.remove('active')
    }
})