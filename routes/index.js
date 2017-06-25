var express = require('express');
var router = express.Router();
var racks = require('./racks');
var db = require('../db');

module.exports = function (app) {
    
    router.get('/', function (req, res) {
        res.send("API ROOT");
    })
    router.use('/racks', racks(app, db.connect(app)));
    
    return router;
}