const express = require('express')
const {addUser, loginUser} = require('../Controller/userController')
const { getEmployee } = require('../Controller/adminController')
const appRouter = express.Router()

appRouter.use(express.json())

appRouter.post('/signup', addUser)
appRouter.post('/login', loginUser)
appRouter.get('/get',getEmployee)

module.exports = appRouter