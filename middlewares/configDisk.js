const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../../public/imgProd");
    callback(null, folder);
	},
	filename: (req, file, callback) => {
    const imageName = Date.now() + path.extname(file.originalname);
    callback(null, imageName);
  },
});

module.exports = multerDiskStorage;