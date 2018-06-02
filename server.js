const express = require('express')
const hbs = require('hbs')  //using handlebars templating system

app = express()  

app.get('/',(req,res) => {
    res.send('<h1 align="center">Hello I am Express!</h1>')
})

app.get('/json',(req,res) => {
    res.send({
        Creator : 'Arjun',
        Uses : [
            'Node',
            'Express'
        ],
        Version : 1.0
    });
});

//serving a static directory
app.use(express.static(__dirname + '/public'));

//setting hbs as view engine for contact page
app.set('view engine','hbs')

app.get('/contact',(req,res) => {
    res.render('contact.hbs',{
        heading : 'CONTACT US'
    });
})

//Using Partials
hbs.registerPartials(__dirname + '/views/partials');

app.listen(3000)