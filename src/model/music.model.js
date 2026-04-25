const mongoose = require('mongoose');


const musicSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', //same name 'user' as in userModel
        required: true
    },
});

const musicModel = mongoose.model('music', musicSchema); // 'music' is the name of the collection in MongoDB and is stored in db with music+plural form i.e. musics.


module.exports = musicModel;
