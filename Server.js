//third party components
var express= require('express');
var app= express();
let BodyParser = require('body-parser');
let MethodOverride = require('method-override');
const path=require('path');
const { application } = require('express');
const { parse } = require('querystring');

// our components
app.listen(3000,()=>console.log('Server running in port 3000!'));

const cities = [
  {id:1, name:"Ben Tre"},
  {id:2 ,name:" Sai Gon"}
];

/*app.get('/',(req,res)=>{
    res.send('Hello World');
});*/
app.get('/',(req,res)=>{
  res.send("Hello World");
})


app.get('/api',(req,res)=>{
  res.send([1,2,3]);  
})

app.get('/api/:id',(req,res)=>{
  const city = cities.find(c=>c.id ===parseInt(req.params.id));
  res.send(city)  ;
})