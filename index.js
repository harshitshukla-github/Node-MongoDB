const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// MongoDB Atlas Connection URI
const MONGODB_URI = "mongodb+srv://erharshitshukla100hs:ID3N8oxTkFEJ8DDm@clusteralpha.viday.mongodb.net//?retryWrites=true&w=majority&appName=ClusterAlpha";

// MongoDB Connection with improved error handling
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Successfully connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('❌ Error connecting to MongoDB Atlas:', error.message);
  process.exit(1); // Exit the process if unable to connect to database
});

// Handle MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('🌟 MongoDB connection established');
});

mongoose.connection.on('error', (err) => {
  console.error('🔥 MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('❗ MongoDB connection disconnected');
});

// Handle application termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed through app termination');
  process.exit(0);
});

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});