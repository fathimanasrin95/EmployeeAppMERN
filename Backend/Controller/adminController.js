const Admin = require('../Model/adminModel')
const Employee = require('../Model/employeeModel')
const jwt = require('jsonwebtoken')

//Login
const adminLogin = async(req,res)=>{
    const loggedAdmin = await Admin.findOne({username:req.body.username})
    

    if(!adminLogin){
        res.json({message:'Not found'})
    }

    try{
        if(loggedAdmin.password === req.body.password){
            const payload = {username:req.body.username,password:req.body.password}
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

//Add new employee
const addEmployee = async(req,res)=>{
    try{
        var employeeData = {
            name:req.body.name,
            position:req.body.position,
            location:req.body.location,
            email:req.body.email,
            phone:req.body.phone
        }
    
        var newEmployee = new Employee(employeeData)
        await newEmployee.save()
        res.status(200).json(employeeData)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'Internal Error'})
    }
    }
 
    //View employee data
    const getEmployee = async (req,res)=>{
        try{
                const employeeList = await Employee.find({})
                res.status(200).json(employeeList)
        }
        catch(error){
            console.log(error)
            res.status(500).json({message:'Internal Error'})
        }
    }

    //Delete employee data
    const deleteEmployee = async (req,res)=>{
        try{
                await Employee.findByIdAndDelete(req.params.id)
                res.status(200).json({message:'Employee data deleted successfully'})
        }
        catch(error){
            console.log(error)
            res.status(500).json({message:'Internal Error'})
        }
    }

    // Update employee data
    const updateEmployee = async(req,res)=>{
        try{
            const {_id, ...updateData} = req.body
            const filter = {_id}
            await Employee.updateOne(filter,updateData)
            res.status(200).json({message:'Updated Successfully'})
        }
        catch(error){
          console.log(error)
          res.status(500).json({error:'Internal Server error'})
        }
      }
      
   


module.exports = {adminLogin, addEmployee, getEmployee, deleteEmployee, updateEmployee}