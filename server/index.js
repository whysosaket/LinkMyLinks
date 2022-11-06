const connectToMongo = require('./database');
const express = require('express');
var cors = require('cors');

connectToMongo();

// setting up express server
const app = express();
let port = process.env.PORT;
if(port == null || ""){
    port = 9000;
}

// cli code to create ttl index for devices
// db.devices.createIndex({ "date": 1}, { expireAfterSeconds: 1800 })

app.use(cors());

// We use this middle ware to read request body params
app.use(express.json());

// Avialable Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/link', require('./routes/link'));

app.listen(port, ()=>{
    console.log("Server started at port: "+port);
})