const fs = require('fs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const { POINT_CONVERSION_HYBRID } = require('constants');

const app = express();
const port = process.env.PORT || 5000;
const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data);
const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));



app.get('/api/customers', (req, res) => {
    connection.query(
        "select * from CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});