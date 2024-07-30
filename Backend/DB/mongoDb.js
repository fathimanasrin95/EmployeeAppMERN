const mongoose = require('mongoose')

mongoose.connect(process.env.mongodb_url).then(()=>{
    console.log('Connected to DB')
})
.catch((error)=>{
    console.log(error)
})