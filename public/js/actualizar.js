function actualizar() {
    document.querySelector('.carrito').innerHTML = items.length;
}

var items = JSON.parse(localStorage.getItem('items'));
if (items == null) {
    items = [];
}

actualizar();