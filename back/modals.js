const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phone:Number,
    userid:String,
    password:String,
})

module.exports = mongoose.model('Studentdetails',studentSchema);