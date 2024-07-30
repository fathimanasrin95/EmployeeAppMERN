const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    name:String,
    position:String,
    location:String,
    email:String,
    phone:Number
})

const Employee = mongoose.model('employees',employeeSchema)

module.exports = Employee