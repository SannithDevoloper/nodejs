const fs=require('fs')
/*const laptop={
    brand:'dell',
    ram:'8gb',
    windows:10,
    color:'silver'
}
const laptopJS=JSON.stringify(laptop)
fs.writeFileSync('1-json.json',laptopJS)*/
//console.log(laptopJS)
//const lap=JSON.parse(laptopJS)
//console.log(lap.color)
/*const dataBuffer=fs.readFileSync('1-json.json')
const dataJson=dataBuffer.toString()
const lap=JSON.parse(dataJson)
console.log(lap.ram)*/
const dataBuffer=fs.readFileSync('1-json.json')
const dataJson=dataBuffer.toString()
const user=JSON.parse(dataJson)
user.brand='chineese'
user.color='purple'
const userJson=JSON.stringify(user)
fs.writeFileSync('1-json.json',userJson)
