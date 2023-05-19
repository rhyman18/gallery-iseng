import DataBeginner from '../../data/galleryBeginner.js';
import createListBeginner from '../templates/galleryBeginner.js';
import { createModalBeginner } from '../templates/modal.js';

const GalleryBeginner = {
    render() {
        return `
        <div class="jumbotron">
            <h1>Welcome to the gallery</h1>
        </div>
        <div id="gallery__beginner" class="gallery__list"></div>
        <div id="modal" class="modal__backdrop">
            <div class="modal__close">
                <i class="fa-solid fa-xmark fa-xl"></i>
            </div>
            <div id="modal__show" class="modal__content"></div>
        </div>
        `;
    },

    afterRender() {
        DataBeginner.forEach((gallery, index) => {
            document.querySelector('#gallery__beginner')
                .innerHTML += createListBeginner(gallery, index);
        });

        const modal = document.querySelector('#modal');

        document.querySelector('.modal__close')
            .addEventListener('click', () => {
                modal.style.display = 'none';
            });
        DataBeginner.forEach((gallery, index) => {
            document.querySelector(`#gallery__beginner__${index}`)
                .addEventListener('click', () => {
                    modal.style.display = 'block';

                    document.querySelector('#modal__show')
                        .innerHTML = createModalBeginner(gallery);
                });
        });
    },

};

export default GalleryBeginner;
