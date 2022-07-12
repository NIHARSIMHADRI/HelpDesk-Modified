const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    logs: [{
        description: String,
        shortDescription: String,
        category: String,
        subCategory: String,
        requester: String,
        contact: String
    }]
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel