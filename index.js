const express = require("express");

const app = express();

app.get("/", function(req, resp){
    resp.send("Bem-vindo ao meu app");
})
// está sempre deve ser a ultima linha quando usamos o express

app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});