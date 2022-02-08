const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique : true,
    },
    premium: {
        type: Boolean,
        required: true,
        default: false,
    },
    standard : {
        type: Boolean,
        required: true,
        default: false,
    }


});

module.exports = mongoose.model('User', userSchema);