const mongoose = require('mongoose');

const codigoSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  premio: { type: String, enum: ['No ganaste', '10mil', '50mil', '1millon'], default: 'No ganaste' },
  estado: { type: String, enum: ['libre', 'reclamado'], default: 'libre' },
  reclamadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fechaReclamo: Date,
});

module.exports = mongoose.model('Codigo', codigoSchema);
