import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import database from './src/config/database.js'
import UserRouter from './src/routes/user.js';
import PostRouter from './src/routes/post.js';

let app = express()

app.use(bodyParser.json())
app.use(cors())

//Routers are define here
app.use("/api/auth",UserRouter)
app.use("/api/auth",PostRouter)



database.sync({alter:true}).then(()=>{
    console.log("Database Connected Successfully")
}).catch((error)=>{
    console.log(`this is the error ${error}`)
})

let port = process.env.PORT | 5000
app.listen(process.env.PORT,()=>{
    console.log(`Application is running on port ${port}`)
})