var express = require('express');

var app = express();


app.use(express.static('./dist/power-exp-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/power-exp-app/' });
});

app.listen(process.env.PORT || 8080);