const express=require('express')
const app=express()
app.get('/users',(req,res)=>{
    res.send([{name:'sanith'},{eamil:'sannith@gmail.com'}])
})
app.listen(3000,()=>{console.log('listening on port 3000')})