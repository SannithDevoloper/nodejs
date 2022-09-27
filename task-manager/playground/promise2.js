require('../src/db/mongoose')
const Tasks=require('../src/models/taskmodel')
//632cad132a60781be0c3ab0a
Tasks.findByIdAndDelete('632cad132a60781be0c3ab0a').then((task)=>{console.log(task)
return Tasks.countDocuments({completedstatus:'false'})}).then((res)=>console.log(res)).catch((e)=>{console.log(e)})