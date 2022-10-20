const jwt=require('jsonwebtoken')
const User= require('../models/usermodel')
const auth= async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','')
        const decoded=jwt.verify(token,'this is my new course')
        const user=await User.findOne({_id:decoded._id,'tokens.token':token})
        if(!user)
        {
            throw new Error()
        }
        req.user= user
        next()

    }
    catch (e){
        res.status(401).send({error:'please authenticate'})
        
        
    }
    // console.log('auth middleware called')
    // next()
}
module.exports= auth