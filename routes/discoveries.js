const express = require("express");
const router = express.Router();
const multer = require('multer');
const Discovery = require('../models/Discovery');
const auth = require('./auth');

// Multer: save uploads locally
const upload = multer({ dest: "uploads/" });

router.post("/", auth, upload.single("photo"), async (req, res) => {
    try {
        const { name, lat, lng, species, age, geologicalUnit, description } = req.body;

        // Convert coordinates to numbers
        const latNum = parseFloat(lat);
        const lngNum = parseFloat(lng);

        if (isNaN(latNum) || isNaN(lngNum)) {
            return res.status(400).json({ error: "Invalid coordinates" });
        }

        const newDiscovery = new Discovery({
            user: req.user.id,
            name,
            coords: [latNum, lngNum],
            species,
            age,
            geologicalUnit,
            description,
            imageUrl: req.file ? `/uploads/${req.file.filename}` : null
        });

        await newDiscovery.save();

        res.json({ success: true, discovery: newDiscovery });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add discovery" });
    }
});

module.exports = router;
