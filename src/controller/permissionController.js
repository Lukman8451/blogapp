import permissions from "../models/permission.js";
import Role from "../models/role.js";
import User from "../models/user.js";

class permission{

    CreatePermission = async (req,res) =>{
        let permissionData = req.body
        let id = req.params.id
        if(permissionData == null || permissionData == undefined && id == null || id == undefined){
            res.status(400).json({error:"User permission is required"});
        }else{
            try {
                let response = await permissions.create(permissionData)
                if(response){
                    res.status(201).json({message:"Permission Created Successfully",data:response})
                }else{
                    res.status(201).json({error:"Something went wrong please try again"})
                }
            } catch (error) {
                console.log(error)
                res.status(200).json({error:error.message});
            }
        } 
    }
    
    UpdatePermission = async (req,res) =>{
        let userData = req.body
        let id = req.params.id
        if(userData == null || userData == undefined  ){
            res.status(400).json({error:"User permission  is required"});
        }else{
            if(id == null || id == undefined){
                res.status(400).json({error:"please provide the id"});
            }else{
                try {
                    let response = await permissions.update(userData,{where:{id:id}});
                    if(response > 0){
                        res.status(201).json({message:"Permission updated Successfully",data:response})
                    }else{
                        res.status(400).json({error:"Something went wrong please try again"})
                    }
                } catch (error) {
                    console.log(error)
                    res.status(200).json({error:error.message});
                }
            }
        } 
    }

    GetAllpermissions = async (req,res) =>{
        try {
            let response = await permissions.findAndCountAll({
                include:[{model:Role,include:[{model:User}]}]
            });
            if(response.count > 0)
            {
                res.status(200).json({data:response})
            }
            else
            {
                res.status(400).json({message:"No Permission  exists",data:response})    
            }
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }
    

    GetPermissionById = async (req,res) =>{
        let page = req.query?.page
        let limit = req.query?.limit
        let keyword = req.query?.keyword
        keyword = keyword == null || keyword == undefined ? "":keyword
        if((page == null || page == undefined)&& (limit == null || limit == undefined )){
            page = 1
            limit = 10
        }else if(page == undefined || limit == undefined){
            page = 1
            limit = 10
        }
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please permission id"})
        }else{
            try {
                let offset = (page - 1) * limit
                let response = await permissions.findByPk(id,{
                    include:[{model:Role,include:[{model:User}]}],
                    include:[{model:permission},{model:User}],
                    offset:offset,
                    limit:limit,
                    order:[["updatedAt","DESC"]]
                });
                if(response == null){
                    res.status(200).json({message:"No Data exists",data:response})
                }else{
                    res.status(200).json({data:response})
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
    }

    DeletePermission = async (req,res) =>{
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide  permission id"})
        }else{
            try {
                let response = await permissions.destroy({where:{id:id}});
                if(response > 0){
                    res.status(200).json({data:response,message:"permission  Deleted Successfully"})
                }else{
                    res.status(400).json({message:"No Data exists",data:response})    
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
        } 
    

    BulkDeletePermissions = async (req,res) =>{
        let userData = req.body
        if(userData == null || userData == undefined){
            res.status(400).json({error:"User permission is required"});
        }else{
            try {
                let response = await permissions.create(userData)
                if(response){
                    res.status(201).json({message:"Permission Created Successfully",data:response})
                }else{
                    res.status(201).json({error:"Something went wrong please try again"})
                }
            } catch (error) {
                console.log(error)
                res.status(200).json({error:error.message});
            }
        } 
    }
}
export default permission