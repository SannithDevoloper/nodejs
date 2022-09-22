// setTimeout(()=>{console.log('hello sannith se result after 3 seconds')},3000)
// const names=['san','sannith','sanith','sannith reddy']
// const shortnames=names.filter((name)=>name.length<=6)
// console.log(shortnames)
// const greet=(address,callback)=>{
//     setTimeout(()=>{
//         const data={lat:1231,lng:5454}
//         callback(data) 
//     },2000)
// }
// greet('goodmorning',(output)=>{console.log(output) })


// const add=(a,b,callback)=>{
//     setTimeout(()=>callback(a+b),5000)
// }
// add(45,46,(add)=>console.log(add))

// const request=require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }
// forecast(-75.7088,44.1545,(error,data)=>{
//     console.log(error)
//     console.log(data)
// })


         const Add=(a,b,callback)=>{
            setTimeout(
            ()=>callback(a+b),5000
            )
         }
Add(24,25,(result)=>{console.log(result)})

const CallBackfun=(callback)=>{
    setTimeout(()=>{
       // callback('this is error','')
       callback(undefined,[{name:'sannith',age:24},{name:'ram',age:25}])
    },2000)
}
CallBackfun((error,result)=>{
    if(error){
       return  console.log(error)
    }
    console.log(result)
})