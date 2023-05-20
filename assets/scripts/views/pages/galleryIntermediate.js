import DataIntermediate from '../../data/galleryIntermediate.js';
import createListIntermediate from '../templates/galleryIntermediate.js';

const GalleryIntermediate = {
    render() {
        return `
        <div class="jumbotron">
            <h1>Welcome to the gallery (intermediate)</h1>
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

        $(document).ready(function() {
            const owl = $('.owl-carousel');
            owl.owlCarousel({
                margin: 10,
                loop: true,
                responsive: {
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },            
                    960:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });

            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        });
    },
};

export default GalleryIntermediate;
