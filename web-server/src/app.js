const express=require('express')
const path=require('path')
console.log(__dirname)
console.log(path.join(__dirname,'../public'))
const app=express()
app.use(express.static(path.join(__dirname,'../public')))
app.get('/',(req,res)=>{
    res.send('hello express!!!!!!!!!!!!!!!!')

})
app.get('/about',(req,res)=>{
    res.send('<h1>About Page Details</h1>')

})
app.get('/help',(req,res)=>{
    res.send([{name:'sannith'},{name:'santhosh'}])

})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide address'
        })
    }
    res.send({ forecast:'it is snowing',location:'New York',address:req.query.address})

})
app.listen(3000,()=>{
    console.log('express server listening on port 3000')
})