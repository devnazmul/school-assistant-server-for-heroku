const mongoose = require('mongoose');
const {AvatarGenerator} = require('random-avatar-generator');

const generator = new AvatarGenerator();

const userSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    is_admin: { type: Boolean, default: false },
    full_name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    profile_pic_url: {type: String, required: true, default: generator.generateRandomAvatar()},
    // png_profile_pic_url: {type: String, required: true,  default: 'test' },
    password: {type: String, required: true},
    updated_at: { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema);

module.exports= User;