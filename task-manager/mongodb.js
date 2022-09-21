const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error)
    {
        console.log('unable to connect to database')
    }
    
   /* const db=client.db(databaseName)
    db.collection('users').insertOne({
        name:'krish',age:20},
    (error,result)=>{
            if(error){
                  console.log('unable to insert into db')
                     }
console.log(result.ops)})*/
/*const db=client.db(databaseName)
    db.collection('tasks').insertMany([{
        description:'complete react',completed:true},{description:'complete node',completed:false},{
            description:'get job',completed:false
        }],
    (error,database)=>{
            if(error){
                  console.log('unable to insert into db')
                     }
                     else{
console.log('result is',database.ops)
}})*/

const db=client.db(databaseName)
    db.collection('tasks').find({description:'complete node'}).toArray(
    (error,tasks)=>{
            if(error){
                  console.log('unable to fetch')
                     }
                    
            console.log(tasks)
})
  }  )


    

