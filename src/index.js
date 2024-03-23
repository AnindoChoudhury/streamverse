require("dotenv").config();
const express = require("express");
const app = express(); 
const {connectDB} = require("./db/mongo")

connectDB(); 

app.listen(process.env.PORT,()=>
{
    console.log("Server Started");
})