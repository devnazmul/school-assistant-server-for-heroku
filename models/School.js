const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    school_type: String,
    name: String,
    email: String,
    eiin_no: Number,
    school_pic_url: String,
    school_cover_url: String,
    password: String,
    updated_at: { type: Date, default: Date.now },
})

const School = mongoose.model('School', schoolSchema);

module.exports= School;