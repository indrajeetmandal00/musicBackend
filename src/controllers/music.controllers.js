const musicModel = require('../model/music.model');
const { uploadFile } = require('../services/storage.services');
const albumModel = require('../model/album.model');

async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;

    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    if (!file) {
        return res.status(400).json({ message: 'File is required' });
    }

    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        title,
        imageUrl: result.url,
        artist: req.user.id
    });

    res.status(201).json({
        message: 'Music created successfully',
        music: {
            id: music._id,
            title: music.title,
            imageUrl: music.imageUrl,
            artist: music.artist
        }
    });
}

async function createAlbum(req, res) {
    const { title, musicId } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics: musicId ? [musicId] : []
    });

    res.status(201).json({
        message: 'Album created successfully',
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    });
}

async function getAllMusic(req, res) {
    const musics = await musicModel.find().skip(0).limit(10).populate('artist', 'name email');

    res.status(200).json({
        message: 'All music fetched successfully',
        musics
    });
}

async function getAllAlbum(req, res) {
    const albums = await albumModel.find().select('title artist').populate('artist', 'name email');

    res.status(200).json({
        message: 'All albums fetched successfully',
        albums
    });
}

async function getAlbumById(req, res) {
    const { albumId } = req.params;
    const album = await albumModel.findById(albumId).populate('artist', 'name email').populate('musics', 'title');

    if (!album) {
        return res.status(404).json({ message: 'Album not found' });
    }

    res.status(200).json({
        message: 'Album fetched successfully',
        album
    });
}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumById };
