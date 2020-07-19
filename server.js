const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/any',
            'name' : '유재섭',
            'birthday' : '931206',
            'gender' : 'male',
            'job' : 'trash'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/any2',
            'name' : '유재섭2',
            'birthday' : '931206',
            'gender' : 'male',
            'job' : 'trash'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/any3',
            'name' : '유재섭3',
            'birthday' : '931206',
            'gender' : 'male',
            'job' : 'trash'
          }
    ])
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});