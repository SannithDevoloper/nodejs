//const fs=require('fs')
///fs.writeFileSync('notes.txt','this file was created by node.js and written by sannith.')
//1st argument is file name and second is data written in it
//fs.appendFileSync('notes.txt',' lives in hyderabad. ')
///////////////////////////////////////////////////////////////////////////////////////////////////
/*const mul=require('./utils')
const multi=mul(5,66)
console.log(multi)*/
////////////////////////////////////////////////////////////////////////////////////////////////
/*const val=require('validator');
const chalk = require('chalk');
const getNotes=require('./notes.js')
const note=getNotes()
console.log(note)
console.log(val.isURL('https/sannithresume.netlify.com'))
console.log(chalk.red.bold.inverse('hurryup..'))*/
////////////////////////////////////////////////////////////////////////////////////////////////////
/*const command=process.argv[2]
if(command==='add'){
    console.log("notes is added")
}
else if(command==='remove'){
    console.log("notes is removed")

}
else{
    console.log(command)
}*/


///////////////////////////////////////////////////////////////////////
/*const yargs=require('yargs')
console.log(yargs.argv)*/
/////////////////////////////////////////////////////////////////////
/*const yargs=require('yargs')
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    
    handler:function() {
     console.log('remove a note')
   

    }
})
yargs.command({
    command: 'add',
    describe: 'add a new note',
    
    handler:function() {
     console.log('adding a note')
   

    }
})
yargs.command({
    command: 'list',
    describe: 'list all  note',
    
    handler:function() {
     console.log('listing a note')
   

    }
})
yargs.command({
    command: 'read',
    describe: 'read a new note',
    
    handler:function() {
     console.log('reading a note')
   

    }
})
console.log(yargs.argv)*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Create add command
//const { argv } = require('yargs')
/*const yargs=require('yargs')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'


        },
         body:{
            describe:'body description',
            demandOption:true,
            type:'string'


        }
    },
    handler:function() {
     console.log('title is='+argv.title)
      console.log('body='+argv.body)

    }
})
yargs.parse()*/




///////////////////////////////////////////////////////////////////////
const Notes=require('./notes.js')
const yargs=require('yargs')
const notes = require('./notes.js')
//comand to add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'


        },
         body:{
            describe:'body description',
            demandOption:true,
            type:'string'


        }
    },
    handler:function(argv) {
        Notes.addNotes(argv.title,argv.body)
   

    }
})
//command to remove
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'


        }
    },
    
    handler:function(argv) {
        Notes.removeNotes(argv.title)
     
   

    }
})
//command to list
yargs.command({
    command: 'listnotes',
    describe: 'list all notes',
    handler:function() {
        Notes.listNotes()
    }
})
//command to read
yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'


        }
    },
    
    handler:function(argv) {
     notes.readNotes(argv.title)
   

    }
})
yargs.parse()