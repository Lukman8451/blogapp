import User from "../models/user.js";
//import User from "../routes/user.js";


class UserController{


    constructor(){

    }

    CreateUser = async (req,res) =>{
        let userData = req.body
        if(userData == null || userData == undefined){
            res.status(400).json({error:"user data is required"});
        }else{
            try {
                let response = await User.create(userData)
                if(response){
                    res.status(201).json({message:"User Created Successfully",data:response})
                }else{
                    res.status(201).json({error:"Something went wrong please try again"})
                }
            } catch (error) {
                console.log(error)
                res.status(200).json({error:error.message});
            }
        } 
    }

    UpdateUser = async (req,res) =>{
        let id = req.params.id
        let userData = req.body
        if(  userData == null || userData == undefined && id == null || id == undefined){
            res.status(400).json({erorr:"please provide id and data"})
        }else{
            try {
                let response = await User.update(userData,{where:{id:id}});
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

    GetAllUsers = async (req,res) =>{
        try {
            let response = await User.findAndCountAll();
            if(response.count > 0){
                res.status(200).json({data:response})
            }else{
                res.status(400).json({message:"No Data exists",data:response})    
            }
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    GetUserById = async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await User.findByPk(id);
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

    DeleteUser = async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await User.destroy({where:{id:id}});
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

    BulkDeleteUsers = async (req,res) =>{
        
    }

   
}

export default UserController