const dns = require("dns")
const mongoose = require("mongoose")

dns.setServers(["8.8.8.8", "1.1.1.1"])

async function connectToDb(){
    await mongoose.connect(process.env.Mongo_URI)
    .then(()=>{
        console.log("Connected to Database")
    })
}

module.exports = connectToDb