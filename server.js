/* IMPORTING */
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
//const userRoutes = require('./routes/user');

// Dotenv config
dotenv.config( { path: './config/config.env' } );

// Passport config
require('./config/passport')(passport);

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Initialize passport
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Dino-Server running on port: ${PORT}`)
    }
);