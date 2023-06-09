const createListBeginner = (gallery, index) => `
<a class="gallery__box" id="gallery__beginner__${index}">
    <img src="${gallery.img_url}" alt="${gallery.judul}">
    <div class="gallery__judul elipsis-1">${gallery.judul}</div>
</a>
`;

export default createListBeginner;
