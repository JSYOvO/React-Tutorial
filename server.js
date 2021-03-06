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

const multer = require('multer');
const upload = multer({dest : './upload'});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers', (req, res) => {
    connection.query(
        "select * from CUSTOMER where isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});
app.use('/image', express.static('./upload'));
app.post('/api/customers', upload.single('image'), (req,res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (NULL,?,?,?,?,?,now(),0)';

    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    
    console.log('namSADASDASDASDe');


    let params = [image, name, birthday, gender, job];
    connection.query(sql,params,
        (err,rows,fileds) => {
            res.send(rows);
        }
    )
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});

app.delete('/api/customers/:id', (req,res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE ID = ?';
    let params = [req.params.id];

    connection.query(sql, params,
        (err,rows,fields) => {
            res.send(rows);
        })
})