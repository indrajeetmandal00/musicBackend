const mongoose=require('mongoose');

const albumSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }, 
    musics:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'music'
    }]
}); 


const albumModel=mongoose.model('album',albumSchema); // 'album' is the name of the collection in MongoDB and is stored in db with album+plural form i.e. albums.
module.exports=albumModel;