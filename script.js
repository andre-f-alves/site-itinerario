const menuIcon = document.querySelector('#menu-icon')

// function ajustar() {
//     if (window.innerWidth >= 992) {
//         menu.style.display = 'block'
//     } else {
//         menu.style.display = 'none'
//     }
// }

function abrir() {
    menuIcon.classList.toggle('clicked')
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}