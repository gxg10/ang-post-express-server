var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
 

require('./app/routes/customer.routes.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})

function initial(){

  let customers = [
    {
      firstname: "Joe",
      lastname: "Thomas",
      age: 36
    },
    {
      firstname: "Peter",
      lastname: "Smith",
      age: 18
    },
    {
      firstname: "Lauren",
      lastname: "Taylor",
      age: 31
    },
    {
      firstname: "Mary",
      lastname: "Taylor",
      age: 24
    },
    {
      firstname: "David",
      lastname: "Moore",
      age: 25
    },
    {
      firstname: "Holly",
      lastname: "Davies",
      age: 27
    },
    {
      firstname: "Michael",
      lastname: "Brown",
      age: 45
    }
  ]
 
  let shops = [
    {
      name: "Doraly",
      location: "km45",
      code: 21
    },
    {
      name: "Nuba",
      location: "Mamaia",
      code: 1
    },
  ]
 
  // Init data -> save to PostgreSQL
  const Shop = db.shops;
  for (let i = 0; i < shops.length; i++) { 
    Shop.create(shops[i]);  
  }

  const Customer = db.customers;
  for (let i = 0; i < customers.length; i++) { 
    Customer.create(customers[i]);  
  }
}
