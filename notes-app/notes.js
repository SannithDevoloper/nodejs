const fs=require('fs')
const chalk=require('chalk')



const readNotes=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.inverse.blue(note.title))
        console.log(chalk.green(note.body))
    }
    else{
        console.log(chalk.red.inverse('note not found'))
    }

}
const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('your Notes'))
    notes.forEach((note)=>console.log(note.title))
    
}
const removeNotes=function(title){
    const notes=loadNotes()
    const notesToKeep=notes.filter(function(note){
        return note.title!==title
    })
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('note removed succesfully'))
    }
    else{
        console.log(chalk.red.inverse(' no note found'))

    }
    saveNotes(notesToKeep)
    

}
const addNotes=function(title,body){
const notes=loadNotes()
const duplicate=notes.find(function(note){
    return note.title===title
})
if(!duplicate)
{
    notes.push({
        title:title,
        body:body
    })
    
    saveNotes(notes)
    console.log(chalk.green.inverse('new note added succesfully='))
    }
else{
    console.log(chalk.red.inverse('note title as already taken'))

}
}

const saveNotes=function(notes){
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}
const loadNotes=function(){

    try{
        const bufferData=fs.readFileSync('notes.json')
    const dataJson=bufferData.toString()
    return JSON.parse(dataJson)

    }
    catch(e){
        return []

    }
    

}
module.exports={
                addNotes:addNotes,
            removeNotes:removeNotes,
        listNotes:listNotes,
    readNotes:readNotes}