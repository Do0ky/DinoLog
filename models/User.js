const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        match: /^[a-zA-Z0-9\-_]+$/ 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /.+\@.+\..+/ 
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 6 
    },
    avatarUrl: { 
        type: String, 
        default: '/assets/dinolog_default-avatar.jpg' 
    }
    }, { 
        timestamps: true 
    });

module.exports = mongoose.model('User', userSchema);