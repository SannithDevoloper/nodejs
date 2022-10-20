const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const userSchema= new mongoose.Schema({
   name:{
       type : String,
      trim:true,
       required:true },
email:{
       type:String,
       unique:true,
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
        }},
   tokens:[{
      token:{
         type: String,
         required:true
      }
   }]
})
userSchema.methods.generateAuthToken= async function (){
   const user=this
   const token=jwt.sign({_id:user._id.toString()},'this is my new course')
   user.tokens= user.tokens.concat({token})
   user.save()
   return token

}
userSchema.statics.findByCredentials = async (email, password) => {
   const user = await User.findOne({ email })

   if (!user) {
       throw new Error('Unable to login')
   }

   const isMatch = await bcrypt.compare(password, user.password)

   if (!isMatch) {
       throw new Error('Unable to login')
   }

   return user
}
userSchema.pre('save',async function (next){
   const user=this
   if(user.isModified('password')){
      user.password= await bcrypt.hash(user.password,8)
   }
   console.log('before saving')
   next()

}
)

const User=mongoose.model('User',userSchema)
     module.exports=User