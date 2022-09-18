const name='sannith'
const age=24
const user={
    name,
    age,
    location:'hyderabad'
}
console.log('user data is ',user)

const movie={
    hero:'prabhas',
    heroine:'anushks',
    director:'rajamouli',
    budget:100000000

}
const hero=movie.hero
console.log(hero)
console.log('hero name is',movie.hero)

const transaction=(type,{hero,director,budget})=>{
    console.log(type,hero,director,budget)
}
transaction('industry',movie)