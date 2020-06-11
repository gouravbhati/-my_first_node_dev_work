// import statments
const path = require('path');
const request = require('request');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const templeterootpath = path.join(__dirname, '../templete/view');
const partialspah = path.join(__dirname, '../templete/partials');
const app = express();
app.set('view engine', 'hbs');
app.set('views', templeterootpath);
hbs.registerPartials(partialspah);

app.get('', (req, res) => {
    res.render('index', {
        name: 'Gourav Bhati'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Gourav Bhati'
    });
})

app.get('/detail', (req, res) => {
    res.render('detail', {
        name: 'Gourav Bhati'
    });
});

app.get('/person', (req, res) => {
    console.log(req.query);
    if (req.query.search) {
        res.send({
            prodects : []
        })
    }
    else {
        res.send({
            prodects: [],
            error : 'Need Search param'
        })
    }
})

app.get('*', (req, res) => {
    res.send('<h4>404 Not Found</h4>')
})



app.listen(port, () => console.log('serve start on '+port));

