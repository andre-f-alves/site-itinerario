const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')


menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('clicked')
    menu.classList.toggle('show')
})

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        menuIcon.classList.remove('clicked')
        menu.classList.remove('show')
    }
})