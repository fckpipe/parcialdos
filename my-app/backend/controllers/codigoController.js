const Codigo = require('../models/codigo');
const Intento = require('../models/Intento');

exports.registroCodigo = async (req, res) => {
  const { userId, codigo } = req.body;

  if (!userId || !codigo) {
    return res.status(400).json({ message: 'Faltan parámetros requeridos' });
  }

  try {
    const codigoDoc = await Codigo.findOne({ codigo });

    if (!codigoDoc) return res.status(404).json({ message: 'Código no encontrado' });

    if (codigoDoc.estado === 'reclamado') {
      return res.status(400).json({ message: 'Código ya registrado' });
    }

    codigoDoc.estado = 'reclamado';
    codigoDoc.reclamadoPor = userId;
    codigoDoc.fechaReclamo = new Date();
    await codigoDoc.save();

    res.json({ message: `Ganaste ${codigoDoc.premio}` });
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

exports.tablaUser = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Faltan parámetros requeridos' });
  }

  try {
    const intentos = await Intento.find({ userId }).populate('codigo');
    res.json(intentos);
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

