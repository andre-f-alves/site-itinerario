const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')


menuIcon.addEventListener('click', function() {
    
    menuIcon.classList.toggle('clicked')
    
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
})