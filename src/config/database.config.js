const mongoose = require('mongoose');

const connectToDatabase = async () => {
  const DATABASE_URI = process.env.DATABASE_URI || "mongodb+srv://bedo:bedonassef71@cluster0.pyyzclc.mongodb.net/online-quiz";
  if (!DATABASE_URI) {
    throw new Error(
      'DATABASE_URI is not defined in the environment variables.',
    );
  }
  try {
    // Removed deprecated options
    await mongoose.connect(DATABASE_URI);
    console.log('Connected to the database successfully');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = { connectToDatabase };