const express = require('express')

const app = express()
app.use(express.json())
const note = []

// app method 
app.post("/notes",(req,res)=>{
    note.push(req.body)
    res.send('notes created')
})

//  get method
app.get("/notes",(req,res)=>{
    res.send(note)
})

// delete method

app.delete('/notes/:id',(req,res)=>{
    delete note[req.params.id]
    res.send('note Deleted')
})

//  patch Method
app.patch("/notes/:id",(req,res)=>{
    note[req.params.id].description = req.body.description
    res.send('notes updated successfully')
})
module.exports = app