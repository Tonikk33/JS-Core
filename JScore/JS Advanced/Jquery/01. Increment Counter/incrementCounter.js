function increment(selector) {
    const root = $(selector);
    const textarea = $('<textarea class=\'counter\' disabled>0</textarea>');
    const incrementButton = $('<button class=\'btn\' id=\'incrementBtn\'>Increment</button>');
    const addButton = $('<button class=\'btn\' id=\'addBtn\'>Add</button>');
    const ul = $('<ul class=\'results\'></ul>');
    const fragment = document.createDocumentFragment();
    $(fragment)
        .append(textarea)
        .append(incrementButton)
        .append(addButton)
        .append(ul);
    $(fragment).appendTo(root);
    incrementButton.on('click', () => textarea.val(`${+textarea.val() + 1}`));
    addButton.on('click', () => $('<li>').text(`${textarea.val()}`).appendTo(ul));
}
