const User = require('../Model/userModel')
const jwt = require('jsonwebtoken')


//Add new user
const addUser = async(req,res)=>{
try{
    var userData = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    }

    var newUser = new User(userData)
    await newUser.save()
    res.status(200).json(userData)
}
catch(error){
    console.log(error)
}
}

//Login
const loginUser = async(req,res)=>{
    const loggedUser = await User.findOne({email:req.body.email})

    if(!loggedUser){
        res.json({message:'User not found'})
    }

    try{
        if(loggedUser.password === req.body.password){
            const payload = {email:req.body.email,password:req.body.password}
            const token = jwt.sign(payload,'checkApp')
            res.status(200).json({message:'Login successful', token:token})
        }
        else{
            res.json({message:'Wrong password'})
        }
    }
    catch(error){
        console.log(error)
    }

     
}


module.exports = {addUser, loginUser}