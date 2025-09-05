const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cgpa-calculator';
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected (${uri})`);
    return true;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    return false;
  }
};

module.exports = connectDB;
