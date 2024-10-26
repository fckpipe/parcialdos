const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  nombre: String,
  fechaNacimiento: Date,
  cedula: String,
  correo: String,
  celular: String,
  ciudad: String,
});

module.exports = mongoose.model('UserInfo', userInfoSchema);
