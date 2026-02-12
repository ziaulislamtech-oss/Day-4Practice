/*  Es (app.js) file main ham server create kartian hain*/ 

const express = require('express') // server import hogaya 

const app = express() 
app.use(express.json())
const notes = []

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    console.log(notes)
    res.send('note created')
})

// get method 
app.get('/notes',(req,res)=>{
    res.send(notes)
})

// Delete 
app.delete('/notes/:id',(req,res)=>{
   
    delete notes[req.params.id]
    res.send(notes)

})

// patch Method
app.patch('/notes/:id',(req,res)=>{
    notes[req.params.id].description = req.body.description
    res.send('notes updated successfully')
    })

module.exports = app