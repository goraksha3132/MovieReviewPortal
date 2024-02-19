const {json} = require("body-parser")
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./route')
const cors = require('cors')

mongoose.connect("mongodb://localhost:27017")
.then(console.log ("mongodb connected"))
.catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use(express.json())

app.use('/about',cors(), route)

app.get(('/'),(req,res)=>{
    res.send("running at port 8000")
})

app.listen(8000,()=>console.log("running at localhost:8000"))