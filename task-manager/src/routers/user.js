const auth= require('../middleware/auth')
const express=require('express')
const User=require('../models/usermodel')
const router=new express.Router()
router.post('/users',async(req,res)=>{
    const user= new User(req.body)
    try{
       await user.save()
        const token= user.generateAuthToken()
        res.send({ user, token})

    }catch(e){
        res.status(400)
        res.send(e)

    }
})
router.get('/users/me',auth,async(req,res)=>{
    // try{
    //     const user = await User.find({})
    //     res.send(user)

    // }
    // catch(e){
    //     res.sendStatus(400)
    // res.send(e)
    // }
    res.send(req.user)
   })
   router.get('/users/:id',async(req,res)=>{
    const _id=req.params.id
    
    try{
       
      const user= await User.findById(_id)
      if(!user){
        return res.status(400).send('no user found')
    }
    res.send(user)

    }
    catch(e){
        res.status(400)
    res.send(e)
        
    }
    
})
router.patch('/users/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['name','email','password','age']
    const isValidOperation=updates.every((update)=>allowedUpdates.includes(update) )
    if(!isValidOperation){
        return res.status(400).send({error:'invalid update'})
    }
    try{
        const user =await User.findByIdAndUpdate(req.params.id)
        updates.forEach((update)=>{user[update]=req.body[update]})
        await user.save()
    //const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!user){
        return res.status(404).send('no user id  found to update')

    }
    res.send(user)
}
catch(e){
    res.status(500)
        res.send(e)
}
})
router.delete('/users/:id',async(req,res)=>{
    try{
        const user=  await User.findByIdAndDelete(req.params.id)
        if(!user){
          return  res.status(404).send({error:'user not found please select correct id'})
        }
        res.send(user)
        
    }
    catch(e){
        res.status(400).send(e)
    }
   

})
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token= await user.generateAuthToken()
        res.send( {user,token})
    } catch (e) {
        res.status(400).send('some thing went wrong please enter valid email or password')
    }
})
module.exports= router