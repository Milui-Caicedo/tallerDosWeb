function actualizar() {
    document.querySelector('.carrito').innerHTML = items.length;
}

var items = JSON.parse(localStorage.getItem('items'));
if (items == null) {
    items = [];
}
if (document.getElementById('subir') != null)
    document.getElementById('subir').addEventListener('click', (e) => { e.preventDefault(); localStorage.clear(); console.log('workin') });

function preventDefault(e) {
    e.preventDefault();
}

var btns = document.querySelectorAll('.carrito-add');

btns.forEach((elem => {
    elem.addEventListener('click', (e) => {
        var name = elem.parentElement.getAttribute('data-name');
        console.log("name");
        if (items.indexOf(name) >= 0) {
            localStorage.setItem(name, localStorage.getItem(name)+=1);
            return;
        }

        items.push(name);
        actualizar();

        localStorage.setItem('items', JSON.stringify(items));
        localStorage.setItem(name,1)
    })
}));

console.log(localStorage.getItem('items'));
actualizar();

