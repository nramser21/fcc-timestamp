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

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(process.env.PORT || 3000);
