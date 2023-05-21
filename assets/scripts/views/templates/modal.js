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

const createModalIntermediate = (gallery) => `
<div class="modal__gallery__intermediate">
    <div class="modal__gallery__intermediate__img">
        <img src="${gallery.img_url}" alt="${gallery.judul}">
    </div>
    <div class="modal__gallery__intermediate__detail">
        <h2>${gallery.judul}</h2>
        <p>${gallery.deskripsi}</p>
        <div class="modal__gallery__intermediate__share">
            <a href="https://telegram.me/share/url?url=https%3A%2F%2Faribudiman.site&text=Check%20this%20web%20its%20Awesome" target="_blank" class="share__item">
                <i class="fa-brands fa-telegram fa-2xl"></i>
                <span class="font-mini">Telegram</span>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faribudiman.site" target="_blank" rel="noopener" class="share__item">
                <i class="fa-brands fa-square-facebook fa-2xl"></i>
                <span class="font-mini">Facebook</span>
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Faribudiman.site" target="_blank" class="share__item">
                <i class="fa-brands fa-linkedin fa-2xl"></i>
                <span class="font-mini">Linkedin</span>
            </a>
            <a href="https://twitter.com/intent/tweet?text=Check%20this%20web%20its%20Awesome&url=https%3A%2F%2Faribudiman.site" target="_blank" class="share__item">
                <i class="fa-brands fa-square-twitter fa-2xl"></i>
                <span class="font-mini">Twittard</span>
            </a>
        </div>
    </div>
</div>
`;

const createModalAdvanced = (gallery) => `
<div id="modal__advanced__${gallery.id}" class="modal__gallery modal__advanced">
    <div class="modal__gallery__img">
        <img src="${gallery.img_url}" alt="${gallery.judul}">
    </div>
    <div class="modal__gallery__detail">
        <h2>${gallery.judul}</h2>
        <p class="modal__gallery__deskripsi">${gallery.deskripsi}</p>
    </div>
</div>
<div id="modal__button__${gallery.id}" class="modal__button__group">
    <div id="prev__${gallery.id}" class="modal__prev">
        <i class="fa-solid fa-arrow-left fa-xl"></i>
    </div>
    <div id="next__${gallery.id}" class="modal__next">
        <i class="fa-solid fa-arrow-right fa-xl"></i>
    </div>
</div>
`;

export {createModalBeginner, createModalIntermediate, createModalAdvanced};
