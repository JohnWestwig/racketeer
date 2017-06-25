const express = require('express');
const app = express();
const routes = require('./routes');
const config = require('./config/config');

app.locals.config = config;


app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use('/api', routes(app));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
