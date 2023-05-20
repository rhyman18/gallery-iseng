const createListIntermediate = (gallery, index) => `
<div class="gallery__intermediate__box">
    <a class="gallery__intermediate__item" id="gallery__intermediate__${index}">
        <img src="${gallery.img_url}" alt="${gallery.judul}">
        <div class="gallery__intermediate__detail">
            <h2>${gallery.judul}</h2>
            <p class="elipsis-3">${gallery.deskripsi}</p>
        </div>
    </a>
</div>
`;

export default createListIntermediate;
