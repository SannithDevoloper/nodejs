const mongoose=require('mongoose')
const Tasks=mongoose.model('Tasks',{
    description:{
     type : String,required:true,trim:true },
     completedstatus:{
         type : Boolean,default:false}
})
module.exports=Tasks
