import './styles/index.less'

document.getElementById('site-navigation-button').onclick = function() {
    document.getElementById('site-navigation-button').classList.toggle("opened");
    document.getElementById('nav-bar').classList.toggle("show-menu");
    document.getElementsByTagName('html')[0].classList.toggle("overlay");
}
