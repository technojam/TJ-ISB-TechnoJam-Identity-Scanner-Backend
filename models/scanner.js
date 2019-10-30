const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create member schema and models
const memeberSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name Field is Required"]
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