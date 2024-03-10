import permission from '../models/permission.js';
import Role from '../models/role.js';
import jwt from "jsonwebtoken"


let PermissionAuthorization = async(req,res,next) => {
    let header = req.headers.authorization
    let type = req.headers.type

    if(header == null  || header == undefined){
        res.status().json({error:"Please login"});
    }else{
        let [authheader, token] = header.split(" ");
        if(token == null || token == undefined){
            res.status(401).json({error:"Please login"})
        }else{
            let data = jwt.verify(token,process.env.JWT_SECRET)
            if(data?.id){
                let user = await Role.findOne({where:{userId:data.id},include:[{model:permission,}]});
                if(user == null || user == undefined){
                    res.status(401).json({error:"UNauthorized User"})
                }else{
                    switch(type){
                        case "create":
                            if(user.permission.create == true){
                                next()
                            }else{
                                res.status(401).json({error:"You not authirzed for Creating any thing"})
                            }
                            break
                        case "update":
                            if(user.permission.create == true){
                                next()
                            }else{
                                res.status(401).json({error:"You not authirzed for update any thing"})
                            }
                            break
                        case "remove":
                            if(user.permission.delete == true){
                                next()
                            }else{
                                res.status(401).json({error:"You not authirzed for Creating any thing"})
                            }
                            break
                        case "view":
                            if(user.permission.view == true){
                                next()
                            }else{
                                res.status(401).json({error:"You not authirzed for Creating any thing"})
                            }
                            break
                        default:
                            res.status(401).json({error:"your are not Authorize to see"});
                    }
                }
            }else{
                res.status(401).json({error:"your are not Authorized"});
            }
        }
    }
}

export default PermissionAuthorization