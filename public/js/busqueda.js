var edad = document.getElementById('edad');
var marca = document.getElementById('marca');
var categoria = document.getElementById('categoria');

document.getElementById('buscar').addEventListener('click',(e)=>{
    e.preventDefault();
    var link = "";
    console.log('working');

    if (!(edad.value == "")) {
        if (link == "")
            link = 'edad=' + edad.value;
        else {
            var str = '&edad=' + (edad.value);
            link = link.concat(str);
        }
    } else {
        console.log('isEmpty');
    }


    if (!(marca.value == "")) {
        if (link == "")
            link = 'marca=' + (marca.value);
        else {
            var str = '&marca=' + (marca.value);
            link = link.concat(str);
        }
    } else {
        console.log('isEmpty');
    }
    if (!(categoria.value == "")) {
        if (link == "")
            link = 'categoria=' + (categoria.value);
        else {
            var str = '&categoria=' + (categoria.value);
            link = link.concat(str);
        }
    } else {
        console.log('isEmpty');
    }
    location.href = '/?' + link;
})