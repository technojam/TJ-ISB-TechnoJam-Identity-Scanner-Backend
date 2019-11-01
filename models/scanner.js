const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create member schema and models
const memeberSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name Field is Required"]
    },
    key: {
        type: String,
        required: [true, "Key is required"]
    },
    hash: {
        type: String,
        required: [true, "Hash code of key is required"]
    },
    linkedin: {
        type: String
    },
    twitter: {
        type: String
    },
    github: {
        type: String
    }

})
const Member = mongoose.model('member', memeberSchema);

module.exports = Member;