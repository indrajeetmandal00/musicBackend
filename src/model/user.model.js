const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'artist'],
        default: 'user'
    }
});

const userModel = mongoose.model('user', userSchema); // 'user' is the name of the collection in MongoDB and is stored in db with user+plural form i.e. users.
module.exports = userModel;
