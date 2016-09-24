import './styles/index.less'

function toggleMenu() {
    document.getElementById('site-navigation-button').classList.toggle("opened");
    document.getElementById('nav-bar').classList.toggle("show-menu");
    document.getElementsByTagName('html')[0].classList.toggle("overlay");
}

document.getElementById('site-navigation-button').onclick = toggleMenu;

document.getElementById('site-navigation-menu-overlay').onclick = toggleMenu;
