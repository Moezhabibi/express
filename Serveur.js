const express = require("express");
const app = express()
const port = 5000
const MiddleWare=(req,res,next)=>{
    let date = new Date();
    let houre = date.getHours();
    let day = date.getDay();
            if (houre<9 || houre>17 || day>5 || day==0) {
                return res.sendFile(__dirname+'/Public/Erreur.html')
            }
            return next()
}

app.get ('/Home',(req,res)=>{
    res.sendFile(__dirname+'/Public/Home.html')
})
app.get ('/Contact',MiddleWare,(req,res)=>{
    res.sendFile(__dirname+'/Public/Contact.html')
})
app.get ('/Service',(req,res)=>{
    res.sendFile(__dirname+'/Public/Service.html')
})

app.get ('/Style.css',(req,res)=>{
    res.sendFile(__dirname+'/Public/Style.css')
})


app.listen (port,console.log(`server fonctionne sur la port ${port}`))
