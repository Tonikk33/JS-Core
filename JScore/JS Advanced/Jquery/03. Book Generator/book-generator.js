function createBook(selector, title, author, isbn) {
    const getBookId = (function () {
        let counter = 0;
        return function () {
            ++counter;
            return `book${counter}`;
        };
    })();
    const div = $(`<div id="${getBookId()}">`);
    const selectBtn = $('<button>Select</button>');
    const deselectBtn = $('<button>Deselect</button>');
    selectBtn.on('click', () => div.css('border', '2px solid blue'));
    deselectBtn.on('click', () => div.css('border', ''));
    div
        .append(`<p class="title">${title}</p>`)
        .append(`<p class="author">${author}</p>`)
        .append(`<p class='isbn'>${isbn}</p>`)
        .append(selectBtn)
        .append(deselectBtn)
        .appendTo($(selector));
}
