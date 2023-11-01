const express=require('express');
const app=express();
const path=require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000,()=>console.log("Exito")); 
app.get('/',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/home.html')); 
});
app.get('/prueba',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/prueba.html')); 
});