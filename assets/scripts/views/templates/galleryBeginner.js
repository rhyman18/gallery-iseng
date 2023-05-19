const createListBeginner = (gallery) => `
<a class="gallery__box">
    <img src="${gallery.img_url}" alt="${gallery.judul}">
    <div class="gallery__judul">${gallery.judul}</div>
</a>
`;

export default createListBeginner;