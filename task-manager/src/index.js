const express=require('express')
const userRouter=require('../src/routers/user')
const taskRouter=require('../src/routers/task')
require('./db/mongoose')
const app=express()
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is upon port number'+port)
})
const bcrypt=require('bcryptjs')
const myfunction=async()=>{
    const password='sannith@123456'
    const hashedPassword=await bcrypt.hash(password,8)
    console.log(hashedPassword)
    console.log(password)
    const isMatch=await bcrypt.compare(password,hashedPassword)
    console.log(isMatch)
}
myfunction()