//third party components
var express= require('express');
var app= express();
let BodyParser = require('body-parser');
let MethodOverride = require('method-override');
const path=require('path');
const { application } = require('express');

// our components
app.listen(3000,()=>console.log('Server running in port 3000!'));


/*app.get('/',(req,res)=>{
    res.send('Hello World');
});*/
app.use(express.static(__dirname))
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/views/index.html');
})

app.get("/json", (req,res)=>{ 
      res.json({
        message:"Hello json"
      });
  })
app.get("/",(req,res)=>{
  res.send('Got a POST request');
})
