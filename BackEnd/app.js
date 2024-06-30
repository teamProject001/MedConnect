const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const port = 5000

const usersRoutes = require ("./routes/users.js")


const db = require("./database/index.js")

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api",usersRoutes)


app.listen(port,()=>{
   console.log(`server listenning on port ${port}`)
})



