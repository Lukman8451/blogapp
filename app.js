import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import database from './src/config/database.js'
let app = express()

app.use(bodyParser.json())
app.use(cors())







database.sync({alter:true}).then(()=>{
    console.log("Database Connected Successfully")
}).catch((error)=>{
    console.log(`this is the error ${error}`)
})

let port = process.env.PORT | 5000
app.listen(process.env.PORT,()=>{
    console.log(`Application is running on port ${port}`)
})