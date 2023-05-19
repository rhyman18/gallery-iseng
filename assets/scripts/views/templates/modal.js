const createModalBeginner = (gallery) => `
<div class="modal__gallery">
    <div class="modal__gallery__img">
        <img src="${gallery.img_url}" alt="${gallery.judul}">
    </div>
    <div class="modal__gallery__detail">
        <h2>${gallery.judul}</h2>
        <p class="modal__gallery__deskripsi">${gallery.deskripsi}</p>
    </div>
</div>
`;

export {createModalBeginner};