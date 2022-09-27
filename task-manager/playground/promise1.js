
require('../src/db/mongoose')
const Tasks=require('../src/models/taskmodel')
Tasks.findByIdAndUpdate('632cad132a60781be0c3ab0a',{description:'fake task'}).then((user)=>{console.log(user)
return Tasks.countDocuments({description:'fake task'})
}).then((result)=>{console.log(result)}).catch((e)=>{console.log(e)})