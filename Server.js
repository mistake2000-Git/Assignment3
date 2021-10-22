//third party components
var express= require('express');
var app= express();
let BodyParser = require('body-parser');
let MethodOverride = require('method-override');
const path=require('path')

// our components



app.listen(3000,()=>console.log('Server running in port 3000!'));


/*app.get('/',(req,res)=>{
    res.send('Hello World');
});*/

app.get('/user',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
})

app.use("/user",express.static(path.join(__dirname,'/css/style')))

app.get("/json", (req,res)=>{ 
      res.json({
        message:"Hello json"
      });
  })
