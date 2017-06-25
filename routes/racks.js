var express = require('express');
var router = express.Router();

module.exports = function (app, db) {
    router.get('/', function (req, res, next) {
        db('racks').select('id', 'location').then(function (rows) {
            res.json(rows);
        });
    });
    router.get('/:rackId', function (req, res, next) {
        var rackId = req.params.rackId;
        console.log(rackId);
        db('racks').select('id', 'location').where('id', rackId).first().then(function (row) {
            if (row) {
                res.json(row);
            } else {
                res.sendStatus(404);
            }
        });
    });
    return router;
}
