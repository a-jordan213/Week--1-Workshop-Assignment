const express = require('express');
const partnersRouter = express.Router();

partnersRouter.route('/') //setting itup in server.js. these are all chained
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end('Will add the partners: ${req.body.name} with description: ${req.body.description}');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnersRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send partners: ${req.params.partnerId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/:partnerId}`);
})
.put((req, res) => {
    res.end(`Will add the partners: ${req.params.partnerId}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting partners: ${req.params.partnersId}`);
});

module.exports = partnersRouter;