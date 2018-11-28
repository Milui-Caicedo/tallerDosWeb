

fetch('http://localhost:5000/productos-en-carrito?names='+items).then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    var lista = document.querySelector('.buyed');
    var subtotal= document.querySelector('#subtotal');
    var precio = 0;

    res.forEach(function(elem){
        precio += parseInt(elem.price);
        var header = `
        <div class="item" data-name="`+elem.name+`">
            <div class="img">
                <img src="/img/`+elem.name+`.jpg"/>
            </div>
            <div class="dato">
                <h1>`+elem.name+`</h1>
                <h4>`+elem.age+` años en adelante</h4>
                <h3>$ `+elem.price+`</h3>
            </div>
            <div class="cantidad">
            <input type="number" name"points" min="1" step="1" value="1" class="cantidad">
            </div>
            <div class="x">x</div>
        </div>
        `;
        lista.innerHTML += header;
    });
    subtotal.innerHTML= "<h3>$ "+precio+"</h3>"
    document.querySelectorAll('.x').forEach((e) => {
        e.addEventListener('click', (elem) => {
            // hacer funcion de eliminar
            localStorage.removeItem(e.parentElement.getAttribute('data-id'));
            console.log(e.parentElement.getAttribute('data-name'));
        });
    })
    document.querySelectorAll('.cantidad').forEach((e)=>{
        e.addEventListener('change',(elem)=>{
            
        });
    });
});


