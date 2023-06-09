import DrawerInitiator from '../utils/drawerInitiator.js';
import ThemeInitiator from '../utils/themeInitiator.js';
import UrlParser from '../routes/urlParser.js';
import routes from '../routes/routes.js';

class Main {
    constructor({button, drawer, content, links, themeBtn}) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
        this._links = links;
        this._themeBtn = themeBtn;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
            links: this._links,
        });

        ThemeInitiator.init(this._themeBtn);
    }

    renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = page.render();
        page.afterRender();
    }
};

export default Main;
