// @ts-nocheck
const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();
connectDb();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

// Log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    next();
});

// Routes
app.use('/api/auth', authRoutes);

// Test endpoint
app.get('/test', (req, res) => {
    console.log('Test endpoint hit');
    console.log('Request headers:', req.headers);
    res.status(200).json({ 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});