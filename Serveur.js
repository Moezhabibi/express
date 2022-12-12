const express = require("express");
const app = express()
const port = 5000

app.get ('/Home',(req,res)=>{
    res.sendFile(__dirname+'/Public/Home.html')
})
app.get ('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/Public/Contact.html')
})
app.get ('/Service',(req,res)=>{
    res.sendFile(__dirname+'/Public/Service.html')
})
app.listen(port,console.log(`serveur fonctionne sur la port ${port}`))












app.listen (port,console.log(`server fonctionne sur la port ${port}`))
