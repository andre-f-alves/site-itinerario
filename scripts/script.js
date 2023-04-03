const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')


menuIcon.addEventListener('click', function() {
    
    menuIcon.classList.toggle('clicked')
    menu.classList.toggle('show')

})

window.addEventListener('resize', function() {
    
    if (window.innerWidth >= 768 && menu.classList.contains('show')) {
    
        menu.classList.remove('show')
        menuIcon.classList.remove('clicked')
    }
})