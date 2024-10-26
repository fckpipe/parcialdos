const Codigo = require('../models/codigo');

exports.tablaAdmin = async (req, res) => {
  try {
    const codigosReclamados = await Codigo.find({ estado: 'reclamado' }).populate('reclamadoPor');
    res.json(codigosReclamados);
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};
