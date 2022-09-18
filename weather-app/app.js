//console.log('start')
//setTimeout(()=>{console.log('10 sec timer')},10000)
//console.log('end')
/*const listLocations=(locations)=>{
    locations.forEach((location)=>console.log(location))
}
const mylocation=['hyd','nzb','kmnr','del']
listLocations(mylocation);*/
/*const namesList=(lists)=>{
    lists.forEach((list)=>console.log(list))
}
const lists=['sannith','santhu','reddy']
namesList(lists)*/
/*const req=require('request')
const url='http://api.weatherstack.com/current?access_key=6a4269392d394a7edff489df394a6bd0&query=New%20York'
req({url:url,json:true},(error,response)=>
                               {const data=response.body
                                   console.log(data.current.weather_descriptions[0]+','+'it is currently '+data.current.temperature+' degrees out . it feels like '+data.current.feelslike+' degrees out')
                                 })*/



                                 const geocode = require('./utils/geocode')
                                 const forecast = require('./utils/forecast')
                                 
                                 const address = process.argv[2]
                                 
                                 if (!address) {
                                     console.log('Please provide an address')
                                 } else {
                                     geocode(address, (error, { latitude, longitude, location }) => {
                                         if (error) {
                                             return console.log(error)
                                         }
                                 
                                         forecast(latitude, longitude, (error, forecastData) => {
                                             if (error) {
                                                 return console.log(error)
                                             }
                                 
                                             console.log(location)
                                             console.log(forecastData)
                                         })
                                     })
                                 }