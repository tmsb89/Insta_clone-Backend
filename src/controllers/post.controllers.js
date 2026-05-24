const postModel = require("../models/post.model")
const Imagekit = require("imagekit")

const imagekit =new Imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function createPostController(req, res){
    console.log(req.body, req.file)

    const file = await imagekit.upload({
        file: req.file.buffer,
        fileName: "Test"
    })

    res.send(file)
}

module.exports = {
    createPostController
}