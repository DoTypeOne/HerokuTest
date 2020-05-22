const express = require('express');
const app = express();
const bp = require('body-parser');
var port = process.env.PORT || 8080

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.set('view engine', 'jade');
app.use(express.static('public'));

// GET method route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/secondpage', function(req, res) {
    res.render('index', { title: 'Second Page', message: 'This is the second page' })
});

// POST method route
app.post('/newuser', function(req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    let json = {
        title: 'New User',
        text: 'Welcome',
        firstName: firstName,
        lastName: lastName
    }

    res.render('newuser', json);

});

app.listen(port, function() {
    console.log('Example app listening on port:' + port);
});