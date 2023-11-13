const express=require('express');
const app=express();
const path=require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3001,()=>console.log("Exito")); 
app.get('/',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/home.html')); 
});
app.get('/login',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/login.html')); 
});
app.get('/registro',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/registro.html')); 
});
app.get('/miscompras',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/miscompras.html')); 
});
app.get('/prueba',function(req,res){ 
    res.sendFile(path.join(__dirname,'views/prueba.html')); 
});