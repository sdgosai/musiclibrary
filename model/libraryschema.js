const mongoose = require('mongoose');
const USER = require("../model/userschema")

const librarySchema = new mongoose.Schema({
    name:{type:String,trim:true},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref: 'USER'}],
    user_id:[{type:mongoose.Schema.Types.ObjectId,ref: 'USER'}]
})

const Library = new mongoose.model("LIBRARY", librarySchema)

module.exports = Library;