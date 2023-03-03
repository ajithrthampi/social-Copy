const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./routes/user')
const adminRoute = require('./routes/admin')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const path = require('path');


app.use(express.json())
app.use(cors())

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log('Database is connected'))

app.use(express.static(path.join(__dirname, "./my-app/build"))); 

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./my-app/build/index.html"))
// })
app.use('/',userRouter)
app.use('/admin',adminRoute)

app.listen(4001,()=>console.log("server is connected"))