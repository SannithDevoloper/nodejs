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
const req=require('request')
const url='http://api.weatherstack.com/current?access_key=6a4269392d394a7edff489df394a6bd0&query=New%20York'
req({url:url},(error,response)=>
                               {const data=JSON.parse(response.body)
                                   console.log(data.current.temperature)
                                 })