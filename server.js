const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app =  express();
const port = process.env.PORT || 3000 ;

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


// app.use((req, res, next) => {
//   var now = new Date().toString();
//   res.render('maintainance.hbs');
//
//   next();
// });

app.get('/about', (req,res) => {
  res.render('about.hbs',{
    header:"Find out about us",
    body: "Fill the form below and ask us any question you would like to!!!",
    currentYear: new Date().getFullYear()
  })
});


hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(sentText) => {
  return sentText.toUpperCase();
})


app.get('/', (req,res) => {
  res.render('home.hbs',{
    header:"Welcome to our Home Page",
    body: "We offer a lot of things here like live results etc!!!",
    currentYear: new Date().getFullYear()
  })
});


app.get('/bad',(req,res) => {
  res.send('Ogbeni this page does not exit at all');
});

app.listen(port, () => {
  console.log(`Server is currently running on port : ${port}`);
});
