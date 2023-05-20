import DataIntermediate from '../../data/galleryIntermediate.js';
import createListIntermediate from '../templates/galleryIntermediate.js';
import OwlInitiator from '../../utils/owlLibInitiator.js';

const GalleryIntermediate = {
    render() {
        return `
        <div class="jumbotron">
            <h1>Welcome to the gallery</h1>
        </div>
        <div id="gallery__intermediate" class="owl-carousel"></div>
        <div id="modal" class="modal__backdrop">
            <div class="modal__close">
                <i class="fa-solid fa-xmark fa-xl"></i>
            </div>
            <div id="modal__show" class="modal__content"></div>
        </div>
        `;
    },

    afterRender() {
        DataIntermediate.forEach((gallery, index) => {
            document.querySelector('#gallery__intermediate')
                .innerHTML += createListIntermediate(gallery, index);
        });

        OwlInitiator.render();
    },
};

export default GalleryIntermediate;
