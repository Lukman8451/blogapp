import { Op } from "sequelize";
import Role from "../models/role.js";
import permission from "../models/permission.js";
import User from "../models/user.js";

class RoleController{

    constructor(){

    }

    CreateRole = async (req,res) =>{
        let RoleData = req.body
        if((RoleData.name == null || RoleData.name == undefined )&& (RoleData.permissionId == null || RoleData.permissionId == undefined)){
            res.status(400).json({error:"Please provide Email or password"});
        }else{
            try {
                let response = await Role.create(RoleData)
                if(response){
                    res.status(201).json({message:"Role Created Successfully",data:response})
                }else{
                    res.status(201).json({error:"Something went wrong please try again"})
                }
            } catch (error) {
                console.log(error)
                res.status(200).json({error:error.message});
            }
        } 
    }   


    UpdateRole = async (req,res) =>{
        let id = req.params.id
        let RoleData = req.body
        if(  RoleData == null || RoleData == undefined && id == null || id == undefined){
            res.status(400).json({erorr:"please provide id and data"})
        }else{
            try {
                let response = await Role.update(RoleData,{where:{id:id}});
                if(response > 0){
                    res.status(200).json({data:response,message:"Updated Successfully"})
                }else{
                    res.status(400).json({message:"No Data exists",data:response})    
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
        
    }

    GetAllRoles = async (req,res) =>{
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
        try {
            let offset = (page - 1) * limit

            let attributes = ["createdAt","updatedAt"]
            let response = await Role.findAndCountAll({
                where:{
                    [Op.or]:{
                        name:{
                            [Op.iLike]:`%${keyword}%`
                        }
                    }
                },
                include:[{model:permission},{model:User}],
                offset:offset,
                limit:limit,
                order:[["updatedAt","DESC"]]
            });
            if(response.count > 0){
                res.status(200).json({data:response})
            }else{
                res.status(400).json({message:"No Role exists",data:response})    
            }
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    GetRoleById = async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await Role.findByPk(id,{include:[{model:permission,},{model:User}]});
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

    GetRoleByUserId = async (req,res) => {
        if(id == null || id == undefined || id == ":id"){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await Role.findOne({where:{userId:id},include:[{model:permission,}]});
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

    DeleteRole = async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await Role.destroy({where:{id:id}});
                if(response > 0){
                    res.status(200).json({data:response,message:"Deleted Successfully"})
                }else{
                    res.status(400).json({message:"No Data exists",data:response})    
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
    }

    BulkDeleteRoles = async (req,res) =>{
     
        // not working

        let {ids}=req.body;
        console.log(ids)
        let ids1 = ids.length
        if(ids1 == 0)
        {
            res.status(400).json({error:"require ids to delete data"})
        }
        else
        {
            try 
            {
                let response = await Role.destroy({where : {id:ids}});
                if(response == null || response == undefined || response == 0)
                {
                    res.status(400).json({error:"cannot delete try again"});
                }
                else
                {
                    res.status(200).json({message : "deleted sucessfully"});
                }
            } 
            catch (error) 
            {
                res.status(400).json({error:error.message});
            }
        }


    
        
    }
   
}

export default RoleController