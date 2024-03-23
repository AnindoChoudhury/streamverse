require("dotenv").config(); 
const mongoose = require("mongoose");
const {DB_Name} = require("../constants")
const connectDB = async ()=>
{
    try
    {
    await mongoose.connect(`${process.env.mongoURL}/${DB_Name}`)
    console.log("Connected"); 
    }
    catch(err)
    {
        console.log("error");
        process.exit(1); 
    }
}


module.exports={connectDB};