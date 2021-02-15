const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    date :{
        type: String,
        required: true
    },
    picUrl: {
        type: String,
        trim: true 
    },
    savedPost: {
        type: Boolean,
        required: true
    },
    tags: {
        type: Array

    },
    text: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        maxlength: 100,
        trim: true,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

const model = mongoose.model('posts', schema)

module.exports = model