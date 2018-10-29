var btn = document.getElementById('add');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    var name = btn.parentElement.getAttribute('data-name');
    if (items.indexOf(name) >= 0) {
        return;
    }

    items.push(name);
    actualizar();

    localStorage.setItem('items', JSON.stringify(items));
});