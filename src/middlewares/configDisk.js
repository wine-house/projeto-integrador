const multer = require('multer');
const path = require('path');

module.exports = {
  multerProductStorage: multer.diskStorage({
    destination: (req, file, callback) => {
      const folder = path.join(__dirname, "../../public/images/imageProd");
      callback(null, folder);
    },
    filename: (req, file, callback) => {
      const imageName = file.originalname;
      callback(null, imageName);
    },
  }),

  multerUserStorage: multer.diskStorage({
    destination: (req, file, callback) => {
      const folder = path.join(__dirname, "../../public/images/imageProfile");
      callback(null, folder);
    },
  
    filename: (req, file, callback) => {
      const userImage = file.originalname;
      callback(null, userImage);
    }
  })
}