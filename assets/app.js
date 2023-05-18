import Main from './scripts/views/main.js';

const main = new Main({
    button: document.querySelector('#nav__hamburger'),
    drawer: document.querySelector('.nav__navigation'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    main.renderPage();
});

window.addEventListener('load', () => {
    main.renderPage();
});
