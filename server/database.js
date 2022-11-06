require ('dotenv').config();

const mongoose = require('mongoose');

const mongoURI = process.env.MONGO;

const connectToMongo= ()=>{
    mongoose.connect(mongoURI, (e)=>{
        console.log("Connected To Mongoose Successfully");
    })
}

module.exports = connectToMongo;