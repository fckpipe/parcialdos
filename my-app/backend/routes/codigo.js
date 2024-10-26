const express = require('express');
const router = express.Router();
const codigoController = require('../controllers/codigoController');

// Define las rutas con funciones callback válidas
router.post('/registroCodigo', codigoController.registroCodigo);
router.get('/tablaUser', codigoController.tablaUser);

module.exports = router;

