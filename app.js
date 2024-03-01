const express = require("express")
const app = express()

app.listen(3000, function(){
    console.log("Servidor Ativo")
})

app.get("/", function(req,res){
    console.log("Página principal")
    res.send("Página principal")
})
 app.get("/contato", function(req,res){
    console.log("Página de Contato")
    res.send("Página Contato")
 })

 app.get("/produto/:item/:quantidade", function(req,res){
    res.send("Página de produtos" + req.params.item + " quantidade " + req.params.quantidade)
 })

 app.get("/cadastro", function(req,res){
    console.log("Página de Cadastro")
    res.send("Página cadastro")
 })

