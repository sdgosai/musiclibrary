const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,trim:true},
    phone:{type:String,trim:true},
    dob:{type:Date,trim:true}
})

const User = mongoose.model("USER", userSchema)

module.exports = User;
