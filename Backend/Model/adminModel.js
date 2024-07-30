const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username:String,
    password:String
})

const Admin = mongoose.model('admins',adminSchema)

module.exports = Admin