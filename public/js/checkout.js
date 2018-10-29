

fetch('http://localhost:5000/productos-en-carrito?names='+items).then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    var lista = document.querySelector('.buyed');
    res.forEach(function(elem){
        var header = `
        <div class="item"><div class="img"><img src="/img/`+elem.name+`.jpg"/></div>
            <div class="dato">
                <h1>`+elem.name+`</h1>
                <h4>`+elem.age+` años en adelante</h4>
                <h3>$ `+elem.price+`</h3>
            </div>
        </div>
        `;
        lista.innerHTML += header;
    });
});