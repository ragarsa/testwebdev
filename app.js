const express = require('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();

//Statements


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));


router.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});



const connec = mysql.createConnection({
  host: "brgiedckrsamma3guj8l-mysql.services.clever-cloud.com",
  user: "uwx0y6turxiw2loy",
  password: "Jhq79uPCpyE4Wcd0ZfFh",
  "database": "brgiedckrsamma3guj8l"
});

connec.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  if (err) throw err;

});


app.post('/post/data',  function (req, res) {
  
  const {nameInput, phoneInput, emailInput} =  req.body;
  let sqlInto = `INSERT INTO contacts(fullname, phone, email) 
  VALUES ('${nameInput.toString()}', '${phoneInput.toString()}', '${emailInput.toString()}')`;
  connec.query(sqlInto, (error, results) => {
    if (error) throw error
    console.log(results)
    res.status(201).send("POST executed successufully");
  } )
  
});


//add the router
app.listen(process.env.port || 3000);
app.use('/', router)
console.log('Running at Port 3000');
