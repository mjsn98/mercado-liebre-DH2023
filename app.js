const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT || 3001;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port}`)); 
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