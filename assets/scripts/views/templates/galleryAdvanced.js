const createListAdvanced = (gallery) => `
<a class="gallery__advanced__box" id="gallery__advanced__${gallery.id}">
    <div class="gallery__advanced__img">
        <img src="${gallery.img_url}" alt="${gallery.img_url}">
    </div>
</a>
`;

export default createListAdvanced;
