const path = require ('path');
const express = require('express');
const app = express ();
const bodyParser = require('body-parser')
const routes = require ('./routes/route')
const uploadData = require ('express-fileupload')

app.set('view engine', 'ejs');
app.set('views','views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
    extended: true
}))

app.get('/',(req, res) => {
    res.render('index');
});



// app.get('/proses', (req, res) => {

//         let nama = req.query.nama
//         let hobi = req.query.hobi

//         res.send(`Nama Saya ${nama} dan Hobi saya ${hobi}`)
// });

// app.post('/proses/:id', (req, res) => {
//         let id = req.params.id

//         res.send(`Id Saya ${id}`)
// });



app.use('/controller', routes);
app.use(uploadData());

app.listen(8000, () => {
    console.log('Server berjalan di port 8000')
});
