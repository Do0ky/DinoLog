/* IMPORTING */
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

// Passport config
require('./config/passport')(passport);
// Dotenv config
dotenv.config( { path: './config/config.env' } );

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Initialize passport
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// DB connection
mongoose.connect('mongodb://localhost:27017/dinolog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Dino-Server running on port: ${PORT}`)
    }
);