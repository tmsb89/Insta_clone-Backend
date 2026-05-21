const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"]
    },

    email:{
        type:String,
        unique:[true, "Email already registered"],
        required:[true, "Email is required"]
    },

    password:{
        type: String,
        required: [true, "Enter password"],
    },

    bio:String,

    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/4k0ilstz5/default%20user%20image.jpghttps://ik.imagekit.io/4k0ilstz5/default%20user%20image.jpg"
    }
})

const userModel = mongoose.model("instausers", userSchema)
module.exports = userModel