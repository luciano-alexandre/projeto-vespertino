const express = require('express');
const server = express();

server.get('/home', ()=>{
    console.log("Tentando acessar a tela home");
})

server.listen(3000);