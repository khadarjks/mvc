const express=require('express')
const mongoose=require('mongoose')
const app=express();
const bodyparser=require('body-parser')

app.listen(10000,()=>
{
    console.log("server connected");
})

mongoose.connect("mongodb+srv://khadarjks:khadarjks@cluster0.prdjgzz.mongodb.net/mvccollection?retryWrites=true&w=majority",()=>
{
    console.log("database connected")
})

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}))
app.use("/",require("./server/routes/router"));