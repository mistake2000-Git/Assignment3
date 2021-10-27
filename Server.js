//third party components
var express= require('express');
var app= express();
app.use(express.json());
let BodyParser = require('body-parser');
let MethodOverride = require('method-override');
const path=require('path');
const { application } = require('express');
const { parse } = require('querystring');
const { countReset } = require('console');
const { runInNewContext } = require('vm');

// our components
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>console.log('Server running in port 3000!'));



const cities = [
  {id:1, name:"Ben Tre"}, 
  {id:2 ,name:"Ho Chi Minh"},
  {id:3 ,name:"Da Nang"},
  {id:4 ,name:"Ha Noi"},
  {id:5 ,name:"Tien Giang"}
];


app.use('/docs',express.static('./Public/docs'))

app.get('/docs',(req,res)=>{
  res.sendFile(__dirname+'/Public/docs/index.html');
})


// Query all city 
app.get('/api',(req,res)=>{
  if(!cities)
  {
    res.status(404).send("The Cities list is empty!");
  }
    res.send(cities);  
})

//Query 1 city
app.get('/api/:id/',(req,res)=>{
  const city = cities.find(city=>city.id ===parseInt(req.params.id));
  if(!city){ //can not found the city ID
    res.status(404).send("The city not found!")
  }
  else
  {
    res.send(city);
  }
})

//Add new city
app.post('/api/',(req,res)=>{ 
  if(!req.body|| req.body.name.length<2||cities.find(city=>city.name===req.body.name))
  {
    res.status(404).send("The city name is wrong or exist!")
  }
  else{
    const newCity={
      id:cities.length+1,
      name:req.body.name
    };
    cities.push(newCity);
    res.send(cities);
  }
})

//Update exist city
app.put('/api/',(req,res)=>{
  if(!req.body || req.body.name.length<2 || cities.find(city=>city.name===req.body.name)||req.body.id>cities.length)
  {
    res.status(404).send("Can't not found the city ID or the name already exist! ");
  }
  else{
    const id = req.body.id-1;
    cities[id].name=req.body.name;
    res.send(cities);
  }
})


//Delete City
app.delete('/api/',(req,res)=>{
  if(!req.body || !cities.find(city=>city.name===req.body.name))
  {
    res.send("No exist the city to delete!");
  }
  else{
    const city = cities.find(city=> city.name===req.body.name);
    const index = cities.indexOf(city)
    cities.splice(index,1);
    for(let i = index;i<cities.length;i++)
    {
      cities[i].id--;
    }
    res.send(cities);
  }
})



