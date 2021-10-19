var express= require('express');
var app= express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});
console.log("Hello World")
app.listen(3000);

app.get("/json", (req,res)=>{ 
      res.json({
        message:"Hello json".toUpperCase()
      });
  })