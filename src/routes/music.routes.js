const express = require('express');
const router = express.Router();

const musicController = require('../controllers/music.controllers');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');


const upload= multer(
    {storage: multer.memoryStorage()}); // to handle multipart/form-data for file uploads


//ARTIST
router.post("/upload",authMiddleware.authArtist, upload.single("file"), musicController.createMusic); //2️⃣B this is accessed by /api/music/upload

//router.post("/album",authMiddleware.authArtist, musicController.createAlbum); //2️⃣C this is accessed by /api/music/album 



//USER
router.get("/all",authMiddleware.authUser, musicController.getAllMusic); //2️⃣D this is accessed by /api/music/all to get all music

router.get("/album/all",authMiddleware.authUser, musicController.getAllAlbum); //2️⃣E this is accessed by /api/music/album/all to get all albums
//aritst can create music and album but user can only get all music and album but can't create music and album that's why we are using authArtist middleware for creating music and album and authUser middleware for getting all music and album because both artist and user can get all music and album but only artist can create music and album.
router.get("/album/:albumId",authMiddleware.authUser, musicController.getAlbumById); //2️⃣F this is accessed by /api/music/album/:albumId to get album by id


module.exports = router;