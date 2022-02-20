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
    subscription: {
        type: String,
        default: "",
    },
    dateab : {
        type: Date,
    }


});

module.exports = mongoose.model('User', userSchema);