const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'tienda';

const client = new MongoClient(url);
var db = null;

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
      price : res[0].price,
      age : res[0].age,
      marca : res[0].marca,
      carac : res[0].caracteristics
    });
  });
});

app.get('/checkout',(reques,response)=>{
  response.render('checkout');
})

app.listen(5000, () => {
  console.log("escuchando al puerto 5000");
});