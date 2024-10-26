const express = require('express');
const cors = require('cors'); // Importa cors
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const codigoRoutes = require('./routes/codigo');
const adminRoutes = require('./routes/admin');
const authMiddleware = require('./utils/authMiddleware');

const app = express();

app.use(cors()); // Usa cors
app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/codigos', authMiddleware, codigoRoutes);
app.use('/api/admin', authMiddleware, adminRoutes);

// Servir el frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
