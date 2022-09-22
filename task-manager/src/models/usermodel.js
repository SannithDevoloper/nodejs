const mongoose=require('mongoose')
const validator=require('validator')

const User=mongoose.model('User',{
                name:{
              type : String,
               trim:true,
                required:true },
             email:{
                    type:String,
                    required:true,
                    trim:true,
                   lowercase:true,
                   validate(value){
                     if(!validator.isEmail(value)){
                            throw new Error('email is invalid')
                      }
                   }
    
                  },
                 password:{type:String,minLength:7,trim:true,
                    required:true,
                     validate(value)
                     {if(value.toLowerCase().includes('password'))
                  {throw new Error('password not should be typed as password')}
                 }},
                age:{
                    type : Number,
                    default:0,
                    maxLength:3,
                      validate(value){
                         if(value<0)
                         throw new Error('age must be positive integer')
                     }}
     })
     module.exports=User