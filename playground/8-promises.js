const doWorkPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([4,5,6])
        //reject('somthing went wrong')
    },2000)
})

doWorkPromise.then((result)=>{
    console.log('success output',result)
}).catch((error)=>{
    console.log('error out put is',error)
})

