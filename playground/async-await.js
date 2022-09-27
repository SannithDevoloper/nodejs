const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0||b<0){
                return reject('num must be postive integer')
            }
            resolve(a+b)},2000)
    })
}

const dowork=async()=>{
    const sum =await add(45,25)
const sum2=await add(sum,-20)
const sum3= await add(sum2,40)
    return sum3

}
dowork().then((sum)=>{console.log('sum is',sum)}).catch((e)=>{console.log(e)})