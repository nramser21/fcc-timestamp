var express = require('express');
var app = express();

var months = ['January', 'Febuary', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'];

function unixToNatural(ms) {
    var date = new Date();
    date.setMilliseconds(ms);
    var year = ', ' + date.getFullYear();
    var month = months[date.getMonth()];
    var day = ' ' + date.getDate();
    return month + day + year;
}

app.get('/:query', (req, res) => {
    var query = req.params.query;
    var time = {
        unix: null,
        natural: null
    };

    var date = Date.parse(query);
    if (!Number.isNaN(date)) {
        console.log("Natural");
        time.unix = date / 1000;
        time.natural = query;
    } else if (parseInt(query)) {
        time.unix = parseInt(query);
        time.natural = unixToNatural(time.unix);
    } 
    res.send(time);
});

app.listen(8080);