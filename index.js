const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'tienda';

const client = new MongoClient(url);
var db = null;

app.use(bodyParser.urlencoded({
  extended: true
}));

client.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  }

  db = client.db(dbName);
});



app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', (reques, response) => {
  const collection = db.collection('fpproductos').find();

  if (reques.query.marca)
    collection.filter({
      marca: reques.query.marca
    });

  if (reques.query.categoria)
    collection.filter({
      categoria: reques.query.categoria
    });
  if (reques.query.edad)
    collection.filter({
      age: parseInt(reques.query.edad)
    });


  collection.toArray((err, docs) => {

    var contexto = {
      productos: docs,
    }
    response.render('index', contexto);
  });
});

app.get('/producto/:id', (reques, response) => {
  console.log(reques.params.id);
  const collection = db.collection('fpproductos').find({
    name: reques.params.id
  });
  collection.toArray((err, res) => {
    response.render('producto', {
      name: res[0].name,
      price: res[0].price,
      age: res[0].age,
      marca: res[0].marca,
      carac: res[0].caracteristics
    });
  });
});

app.get('/checkout', (reques, response) => {
  response.render('checkout');
});

app.post('/agregarinfo', (reques, response) => {
  console.log(reques.body);
  if (reques.body.name)
    var nombre = reques.body.name
  else
    return
  if (reques.body.apellido)
    var apellido = reques.body.apellido
  else
    return
  if (reques.body.direccion)
    var direccion = reques.body.direccion
  else
    return
  if (reques.body.metodo)
    var metodo = reques.body.metodo
  else
    return

  console.log('se registró');

  db.collection('ventas').insert({
    name: nombre,
    lastname: apellido,
    addres: direccion,
    method: metodo,
  }, (err, result) => {
    if (err) {
      console.error(err);
      response.send(err);
      return;
    }
    response.send("Muchas gracias");
  });


});

app.get('/productos-en-carrito', (reques, response) => {
  var productos = reques.query.names.split(',');
  db.collection('fpproductos').find({
    name: {
      $in: productos
    }
  }).toArray((err, result) => {
    response.send(result);
  });
});

app.listen(5000, () => {
  console.log("escuchando al puerto 5000");
});