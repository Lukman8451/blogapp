import Role from '../models/role.js';
import User from '../models/user.js';
import jwt from "jsonwebtoken"


let AuthorizeUser = async(req,res,next) =>{
    let header = req.headers.authorization
    if(header == null  || header == undefined){
        res.status().json({error:"Please login"});
    }else{
        let [authheader, token] = header.split(" ");
        if(token == null || token == undefined){
            res.status(401).json({error:"Please login"})
        }else{
            let data = jwt.verify(token,process.env.JWT_SECRET)
            if(data?.id){
                let user = await User.findByPk(data.id,{include:[Role]});
                if(user == null || user == undefined){
                    res.status(401).json({error:"UNauthorized User"})
                }else{
                    if(user.role == null || user.role == undefined){
                        res.status(401).json({error:"UnAuthorized"})
                    }else{
                        if(user.role.name == "Admin"){
                            next()
                        }else{
                            res.status(401).json({error:"UnAuthorized"})
                        }
                    }
                }
            }else{

            }
        }
    }
}

export default AuthorizeUser