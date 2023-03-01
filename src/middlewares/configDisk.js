const multer = require('multer');
const path = require('path');

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../../public/images/imageProd");
    callback(null, folder);
	},
	filename: (req, file, callback) => {
    const imageName = file.originalname;
    callback(null, imageName);
  },
});

module.exports = multerDiskStorage;