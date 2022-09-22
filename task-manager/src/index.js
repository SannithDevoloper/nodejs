const express=require('express')
const User = require('./models/usermodel')
const Tasks = require('./models/taskmodel')
require('./db/mongoose')
require('./models/usermodel')
const app=express()
const port=process.env.PORT || 3000
app.use(express.json())
app.post('/tasks',(req,res)=>{
    
   const task=new Tasks(req.body)
    task.save().then(()=>res.send(task)).catch((e)=>{
        res.status(400)
        res.send(e)
 })
})

app.post('/users',(req,res)=>{
    const user= new User(req.body)
    user.save().then(()=>res.send(user)).catch((e)=>{
        res.status(400)
        res.send(e)})
    //console.log('body',req.body)
//res.send('welcome back sannith')
})
app.get('/users',(req,res)=>{
    User.find({}).then((user)=>res.send(user)).catch((e)=>{res.sendStatus(400)
    res.send(e)})})

    app.get('/tasks',(req,res)=>{
        Tasks.find({}).then((task)=>res.send(task)).catch((e)=>{res.sendStatus(400)
        res.send(e)})})

    app.get('/users/:id',(req,res)=>{
        const _id=req.params.id
        User.findById(_id).then((user)=>{
            if(!user){
                return res.send('no user found')
            }
            res.send(user)
        }).catch((e)=>{res.status(500)
        res.send(e)})
    })
    

    app.get('/tasks/:id',(req,res)=>{
        const _id=req.params.id
        Tasks.findById(_id).then((task)=>{
            if(!task){
                return res.status(400).send('no tasks found')
            }
            res.send(task)
        }).catch((e)=>{res.status(500)
        res.send(e)})
    })
    
app.listen(port,()=>{
    console.log('server is upon port number'+port)
})