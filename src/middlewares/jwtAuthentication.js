import jwt from "jsonwebtoken"
import User from "../models/user.js"

let isAuthicated = async ( req , res , next ) =>{
    let header = req.headers.authorization
    console.log(header)
    if(header == null || header == undefined){
        res.status(400).json({error:"Please Login"});
    }else{
        //header = ["Bearer skjfnskjfnndfgindfkjgdfgoidfjjkdgdkjbndiu"]
        let [authheader,token] = header.split(" ");
        if(token == null || token == undefined){
            res.status(401).json({error:"UnAuthorized Access"})
        }else{
            let data = jwt.verify(token,process.env.JWT_SECRET);
            let user = await User.findByPk(data.id);
            if(user == null || user == undefined){
                res.status(401).json({error:"Unauthorized Access"})
            }else{
                req.user = user.id
                next()
            }
        }
    }
}

export default isAuthicated;