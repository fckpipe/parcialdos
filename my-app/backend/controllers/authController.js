const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const UserInfo = require('../models/userInfo');

exports.login = async (req, res) => {
  const { correo, contraseña } = req.body;
  const user = await User.findOne({ correo });

  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

  const isMatch = await bcrypt.compare(contraseña, user.contraseña);
  if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

  const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
  res.json({ token, userId: user._id });
};

exports.newUser = async (req, res) => {
  const { correo, contraseña, rol } = req.body;
  const hashedPassword = await bcrypt.hash(contraseña, 10);
  const newUser = new User({ correo, contraseña: hashedPassword, rol });

  await newUser.save();
  res.json({ message: 'Usuario creado' });
};

exports.newAdmin = async (req, res) => {
  const { correo, contraseña } = req.body;
  const hashedPassword = await bcrypt.hash(contraseña, 10);
  const newAdmin = new User({ correo, contraseña: hashedPassword, rol: 'admin' });

  await newAdmin.save();
  res.json({ message: 'Administrador creado' });
};
