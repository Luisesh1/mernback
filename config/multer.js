const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento con multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renombra el archivo con la fecha actual
  },
});

// Filtra el tipo de archivo para permitir solo imágenes
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload an image.'), false);
  }
};

// Middleware para la carga de archivos
const upload = multer({ storage, fileFilter });

module.exports = upload;
