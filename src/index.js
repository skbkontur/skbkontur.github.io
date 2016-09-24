import './styles/index.less'
import Hammer from 'hammerjs';

const siteNavigation = document.getElementById('site-navigation');
let containerWidth = null;

function toggleMenu() {
    document.getElementById('site-navigation-button').classList.toggle("opened");
    document.getElementById('nav-bar').classList.toggle("show-menu");
    document.getElementsByTagName('html')[0].classList.toggle("overlay");
    setTimeout(function() {
        containerWidth = siteNavigation.offsetWidth;
        siteNavigation.style.width = 'auto';
    }, 500);

}

document.getElementById('site-navigation-button').onclick = toggleMenu;
document.getElementById('site-navigation-menu-overlay').onclick = toggleMenu;

var hammer = new Hammer(document.getElementById('site-navigation'));
hammer.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 }));
hammer.on('panstart panmove panend pancancel', (ev) => {
    var delta = ev.deltaX;
    var percent = (100 / containerWidth) * delta;
    siteNavigation.style.width = Math.round(containerWidth - delta).toString() + 'px';
    if (ev.type == 'panend' || ev.type == 'pancancel') {
        if (Math.abs(percent) > 30 && ev.type == 'panend') {
            toggleMenu();
        }
        else {
            siteNavigation.style.width = containerWidth.toString() + 'px';
        }
    }
});
