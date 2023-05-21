const ThemeInitiator = {
    init(themeButton) {
        this._themeButton = themeButton;
        this._html = document.querySelector('html');

        this._renderThemeButton();
    },

    _renderThemeButton() {
        this._themeButton.addEventListener('click', () => {
            if (this._html.dataset.colorMode === 'light') {
                this._html.dataset.colorMode = 'dark';
                this._themeButton.innerText = 'Theme: Dark';
            } else {
                this._html.dataset.colorMode = 'light';
                this._themeButton.innerText = 'Theme: Light';
            }
        });
    },
};

export default ThemeInitiator;
