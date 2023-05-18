import Main from './scripts/utils/drawerInitiator.js';

Main.init({
    button: document.querySelector('#nav__hamburger'),
    drawer: document.querySelector('.nav__navigation'),
    content: document.querySelector('#mainContent'),
});
