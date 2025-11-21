const express = require("express");
const router = express.Router();
const multer = require('multer');
const Discovery = require('../models/Discovery');
const passport = require('passport');

// Multer: save uploads locally
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  try {
    const discoveries = await Discovery.find();
    res.json(discoveries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch discoveries" });
  }
});

router.post("/", passport.authenticate("jwt", { session: false }), upload.single("photo"), async (req, res) => {
    try {
      console.log("Request body:", req.body);
      console.log("Uploaded file:", req.file);
      console.log("User:", req.user);

      const { name, lat, lng, species, age, geologicalUnit, description } = req.body;
      // Convert coordinates to numbers
      const latNum = parseFloat(lat);
      const lngNum = parseFloat(lng);

      if (isNaN(latNum) || isNaN(lngNum)) {
        return res.status(400).json({ error: "Invalid coordinates" });
      }

      const newDiscovery = new Discovery({
          user: req.user._id,
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

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("photo"),
  async (req, res) => {
    try {
      const { name, lat, lng, species, age, geologicalUnit, description } = req.body;

      // Convert coordinates if provided
      const latNum = lat ? parseFloat(lat) : undefined;
      const lngNum = lng ? parseFloat(lng) : undefined;

      const updates = {
        name,
        species,
        age,
        geologicalUnit,
        description,
      };

      if (latNum !== undefined && lngNum !== undefined) {
        if (isNaN(latNum) || isNaN(lngNum)) {
          return res.status(400).json({ error: "Invalid coordinates" });
        }
        updates.coords = [latNum, lngNum];
      }

      if (req.file) {
        updates.imageUrl = `/uploads/${req.file.filename}`;
      }

      // Only allow editing if the discovery belongs to the logged-in user
      const discovery = await Discovery.findOneAndUpdate(
        { _id: req.params.id, user: req.user._id },
        updates,
        { new: true }
      );

      if (!discovery) {
        return res.status(404).json({ error: "Discovery not found or not owned by user" });
      }

      res.json({ success: true, discovery });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update discovery" });
    }
  }
);

module.exports = router;
