const fs=require('fs')
const chalk=require('chalk')
const getNotes= function(){
    return 'your notes'
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
const duplicates=notes.filter(function(note){
    return note.title===title
})
if(duplicates.length===0)
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
module.exports={getNotes:getNotes,
                addNotes:addNotes,
            removeNotes:removeNotes}