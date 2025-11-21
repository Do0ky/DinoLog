const mongoose = require("mongoose");

const discoverySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    coords: {
        type: [Number], // [lat, lng]
        required: true,
        validate: v => v.length === 2
    },
    imageUrl: {
        type: String,
        default: null
    },
    species: {
        type: String,
        default: ""
    },
    age: {
        type: String,
        default: ""
    },
    geologicalUnit: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }

}, { timestamps: true });

module.exports = mongoose.model("Discovery", discoverySchema);
