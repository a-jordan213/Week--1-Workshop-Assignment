const express = require('express'); //no file path, its auto
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const partnersRouter = require('./routes/partnerRouter');
const promotionsRouter = require('./routes/promotionsRouter');

const hostname = 'localhost'; //why same names?
const port = 3000;

const app = express(); // express fn tht returns express server app
app.use(morgan('dev')); //the dev op on screen and log info
app.use(express.json()); //this midware 

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionsRouter);
app.use('/partners', partnersRouter);

app.use(express.static(__dirname + '/public')); //dirspecial variable will refer to abosut path

app.use((req, res) => { //req=request res=response?
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});