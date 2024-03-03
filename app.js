import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import database from './src/config/database.js'
import UserRouter from './src/routes/user.js';
import PostRouter from './src/routes/post.js';
import CommentRouter from './src/routes/comment.js';
import setAssociations from './src/models/associations.js';
import RoleRouter from './src/routes/role.js';
import UserpermissionRouter from './src/routes/userpermission.js';



setAssociations()

let app = express()


app.use(bodyParser.json())
app.use(cors())

//Routers are define here
app.use("/api/auth",UserRouter)
app.use("/api/post",PostRouter)
app.use("/api/comment",CommentRouter)
app.use("/api/permission",UserpermissionRouter)
app.use("/api/role",RoleRouter)



database.sync({alter:true}).then(()=>{
    console.log("Database Connected Successfully")
    
}).catch((error)=>{
    console.log(`this is the error ${error}`)
})

let port = process.env.PORT | 5000
app.listen(process.env.PORT,()=>{
    console.log(`Application is running on port ${port}`)
})
