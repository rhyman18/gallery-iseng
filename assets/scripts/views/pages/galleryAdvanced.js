import DataAdvanced from '../../data/galleryAdvanced.js';
import createListAdvanced from '../templates/galleryAdvanced.js';
import { createModalAdvanced } from '../templates/modal.js';

const GalleryAdvanced = {
    render() {
        return `
        <div class="jumbotron">
            <h1>Welcome to the gallery</h1>
        </div>
        <div id="gallery__advanced" class="gallery__advanced__list"></div>
        <div id="modal" class="modal__backdrop">
            <div class="modal__close">
                <i class="fa-solid fa-xmark fa-xl"></i>
            </div>
            <div id="modal__show" class="modal__content"></div>
        </div>
        `;
    },

    afterRender() {
        DataAdvanced.forEach((gallery) => {
            document.querySelector('#gallery__advanced')
                .innerHTML += createListAdvanced(gallery);
        });

        const modal = document.querySelector('#modal');

        document.querySelector('.modal__close')
            .addEventListener('click', () => {
                modal.style.display = 'none';

                document.querySelectorAll('.modal__advanced').forEach((element) => {
                    element.style.display = 'none';
                });

                document.querySelectorAll('.modal__button__group').forEach((element) => {
                    element.style.display = 'none';
                });
            });

        DataAdvanced.forEach((gallery) => {
            document.querySelector('#modal__show')
                .innerHTML += createModalAdvanced(gallery);

            document.querySelector(`#gallery__advanced__${gallery.id}`)
                .addEventListener('click', () => {
                    modal.style.display = 'block';

                    document.querySelector(`#modal__advanced__${gallery.id}`)
                        .style.display = 'block';

                    document.querySelector(`#modal__button__${gallery.id}`)
                        .style.display = 'block';
                });

            document.querySelector(`#prev__${gallery.id}`)
                .addEventListener('click', () => {
                    document.querySelector(`#modal__advanced__${gallery.id}`)
                        .style.display = 'none';

                    document.querySelector(`#modal__button__${gallery.id}`)
                        .style.display = 'none';

                    document.querySelector(`#modal__advanced__${gallery.id - 1}`)
                        .style.display = 'block';

                    document.querySelector(`#modal__button__${gallery.id - 1}`)
                        .style.display = 'block';
                });

            document.querySelector(`#next__${gallery.id}`)
                .addEventListener('click', () => {
                    document.querySelector(`#modal__advanced__${gallery.id}`)
                        .style.display = 'none';

                    document.querySelector(`#modal__button__${gallery.id}`)
                        .style.display = 'none';

                    document.querySelector(`#modal__advanced__${gallery.id + 1}`)
                        .style.display = 'block';

                    document.querySelector(`#modal__button__${gallery.id + 1}`)
                        .style.display = 'block';
                });
        });
    },
};

export default GalleryAdvanced;
