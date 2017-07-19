import { index } from './controllers/users';

var express = require('express');        // call express

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'Welcome to Satoshi api server!' });
});
router.post('/login', function (req, res) {
    res.json({ status: 'STATUS_OK' });
});

// more routes for our API will happen here
// router.get('/users', index);
module.exports = router;