const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    spacial_at: {type:String},
    name: {type:String,required:true},
    email: {type:String,required:true},
    phone: {type:Number,required:true},
    gander: {type:String,required:true},
    teacher_pic_url: {type:String, default:'https://i.ibb.co/02q5FpM/avater.png'},
    about:{type:String},
    date_of_birth:{ type :Date, required:true},
    password: {type:String,required:true},
    updated_at: { type: Date, default: Date.now },
})

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports= Teacher;