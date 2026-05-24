const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: '',
    },

    imgUrl: {
        type: String,
        required: [true, "Add Something to create a Post"]
    },

    user: {
        ref: "users",
        type: mongoose.Types.ObjectId,
        required: [true, "User id is required to create a post"]
    }
})

const postModel = mongoose.model("posts", postSchema)
module.exports = postModel