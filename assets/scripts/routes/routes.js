import GalleryBeginner from '../views/pages/galleryBeginner.js';
import GalleryIntermediate from '../views/pages/galleryIntermediate.js';
import GalleryAdvanced from '../views/pages/galleryAdvanced.js';

const routes = {
    '/': GalleryBeginner,
    '/gallery-2': GalleryIntermediate,
    '/gallery-3': GalleryAdvanced,
};

export default routes;
