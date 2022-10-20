const express=require('express')
const userRouter=require('../src/routers/user')
const taskRouter=require('../src/routers/task')
require('./db/mongoose')
const app=express()
// app.use((req,res,next)=>{ 
//     if(req.method === 'GET'){
//         res.send('get req were disaled')
//     }
//     else{
//         next()
//     }
// } )


// app.use((req,res,next)=>{ 
//        res.status(503).send('site is under maintaince please check later')
    
//  } )
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is upon port number'+port)
})
//const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')
const myfunction=async()=>{
    const token=jwt.sign({_id:'12346'},'this is my new course',{expiresIn:'7 days'})
    console.log(token)

    const data=jwt.verify(token,'this is my new course')
    console.log(data)
    // const password='sannith@123456'
    // const hashedPassword=await bcrypt.hash(password,8)
    // console.log(hashedPassword)
    // console.log(password)
    // const isMatch=await bcrypt.compare(password,hashedPassword)
    // console.log(isMatch)
}
myfunction()