const { ImageKit } = require('@imagekit/nodejs');
 

const ImageKitInstance = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(file){
    const result = await ImageKitInstance.files.upload({    //.files is needed
        file,
        fileName: 'music' + Date.now(),
        folder: 'backend01/music'
    });
    return result;
}

module.exports = { uploadFile }; 
