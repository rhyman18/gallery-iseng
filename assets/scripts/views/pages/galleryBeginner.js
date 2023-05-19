import DataBeginner from '../../data/galleryBeginner.js';
import createListBeginner from '../templates/galleryBeginner.js';

const GalleryBeginner = {
    render() {
        return `
        <div class="jumbotron">
            <h1>Welcome to the gallery</h1>
        </div>
        <div id="gallery__beginner" class="gallery__list"></div>
        `;
    },

    afterRender() {
        DataBeginner.forEach((gallery) => {
            document.querySelector('#gallery__beginner')
                .innerHTML += createListBeginner(gallery);
        });
    },
};

export default GalleryBeginner;
