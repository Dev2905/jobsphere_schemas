import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobRoutes.js';  
import userRoutes from './routes/userRoutes.js';


dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/jobs', jobRoutes);
app.use('/api/users', userRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));