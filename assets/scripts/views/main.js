import DrawerInitiator from '../utils/drawerInitiator.js';

const Main = {
    init({button, drawer, content}) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    },

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    },

    renderPage() {}
};

export default Main;
