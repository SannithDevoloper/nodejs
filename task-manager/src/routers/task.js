const express=require('express')
const Tasks=require('../models/taskmodel')
const router=new express.Router()
router.post('/tasks',async(req,res)=>{
    
    const task=new Tasks(req.body)
    try{
     const tasks= await task.save()
     res.send(tasks)
 
 
    }
    catch(e){
     res.status(400)
     res.send(e)
    }
    
 })
 
 
 
     router.get('/tasks',async(req,res)=>{
         try{
            const task= await Tasks.find({})
            res.send(task)
         }
         catch(e){
             res.sendStatus(400)
         res.send(e)
             
             
         }
        })
 
   
     
 
     router.get('/tasks/:id',async(req,res)=>{
         const _id=req.params.id
         try{
            task= await Tasks.findById(_id)
            if(!task){
             return res.status(400).send('no tasks found')
         }
         res.send(task)
 
         }
         catch(e){res.status(500)
             res.send(e)}
         
     })
   
 
     router.patch('/tasks/:id',async(req,res)=>{
         const updates=Object.keys(req.body)
         const allowedUpdates=['description','completedstatus']
         const isValidOperation=updates.every((update)=>allowedUpdates.includes(update) )
         if(!isValidOperation){
             return res.status(400).send({error:'invalid update'})
         }
         try{
            const task =await Tasks.findByIdAndUpdate(req.params.id)
             updates.forEach((update)=>{task[update]=req.body[update]})
            await task.save()
         //const task =await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
         if(!task){
             return res.status(404).send('no task id  found to update')
 
         }
         res.send(task)
     }
     catch(e){
         res.status(500)
             res.send(e)
     }
     })
 
 
 
     router.delete('/tasks/:id',async(req,res)=>{
         try{
             const task=  await Tasks.findByIdAndDelete(req.params.id)
             if(!task){
               return  res.status(404).send({error:'tasks not found please select correct id'})
             }
             res.send(task)
             
         }
         catch(e){
             res.status(400).send(e)
         }
        
 
     })

     module.exports=router