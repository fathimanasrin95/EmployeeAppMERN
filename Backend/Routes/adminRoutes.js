const express = require('express')
const appRouter = express.Router()
const {adminLogin, addEmployee, getEmployee, deleteEmployee, updateEmployee} = require('../Controller/adminController')

appRouter.use(express.json())

appRouter.post('/login',adminLogin)
appRouter.post('/add', addEmployee)
appRouter.get('/get',getEmployee)
appRouter.delete('/delete/:id',deleteEmployee)
appRouter.put('/update',updateEmployee)

module.exports = appRouter
