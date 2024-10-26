const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://juanhenao03:Bo14L0M5pMcSUUAF@ganacomoloco.ysk7x.mongodb.net/');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
