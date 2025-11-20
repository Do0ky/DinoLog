const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
    try {
        console.log("📨 /api/auth/register hit!", req.body); 
        const { username, email, password } = req.body;

        // basic validation
        if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
        }

        // enforce stronger password: min 6 chars, must contain letters + numbers
        if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
        }
        if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
        return res.status(400).json({ error: 'Password must contain both letters and numbers' });
        }

        // check if user exists
        const existing = await User.findOne({ email });
        if (existing) {
        return res.status(400).json({ error: 'Email already registered' });
        }
        const existingUser = await User.findOne({ username });
        if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

         // auto-login: issue JWT immediately
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { password: _, ...safeUser } = user.toObject();

        res.status(201).json({
            message: 'User registered successfully!',
            token,
            user: safeUser
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ error: err.message });
    }
});

// LOGIN
router.post('/login', (req, res, next) => {
    console.log("📨 /api/auth/login hit!", req.body);

    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            console.error("Login error:", err); 
            return next(err);
        }
        if (!user) {
            console.log("Login failed:", info?.message);
            return res.status(401).json({ error: info?.message || 'Invalid credentials' });
        }
        console.log("Login successful, raw user:", user);

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { password: _, ...safeUser } = user.toObject();
        res.json({ message: 'Login successful', token, user: safeUser });
    }) (req, res, next);
});

// PROFILE (protected)
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { password, ...safeUser } = req.user.toObject();
    res.json({ user: safeUser });

});

module.exports = router;