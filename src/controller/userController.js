import User from "../models/user.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
class UserController{


    constructor(){

    }

    
    CreateUser = async (req,res) =>{
        let userData = req.body
        if((userData.email == null || userData.email == undefined )&& (userData.password == null || userData.password == undefined)){
            res.status(400).json({error:"Please provide Email or password"});
        }else{
            try {
                let password = userData.password
                let salt = await bcrypt.genSalt(10)
                password = await bcrypt.hash(password,salt);
                console.log("this is the encrypted password",password)
                userData["password"] = password
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


    LoginController = async (req,res) => {
        let data = req.body
        if((data.email == null || data.email == undefined )&&( data.password == null || data.password == undefined)){
            res.status(400).json({error:"Please provide email/password correctly"})
        }else{
            try {
                let response = await User.findOne({
                    where:{
                        email:data.email
                    }
                });
                if(response == null){
                    res.status(400).json({error:"Email dosent exists"});
                }else{
                    if(await bcrypt.compare(data.password,response.password)){
                        let token = jwt.sign({id:response.id,email:response.email},process.env.JWT_SECRET,{expiresIn:"1m"});
                        let refreshToken = jwt.sign({id:response.id},process.env.JWT_SECRET,{expiresIn:"5m"});
                        if(token != null && refreshToken!= null){
                            res.cookie("AccessToken",token);
                            res.cookie("RefreshToken",refreshToken)
                            res.status(200).json({user:response});
                        }
                    }else{
                        res.status(400).json({error:"Incorrect Password"})
                    }
                }
                
            } catch (error) {
                res.status(400).json({error:error.message})
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
        try {
            let response = await User.truncate();
            if(response == 0)
            {
                res.status(200).json({data:response,message: "All user Deleted Sucessfully"});
            }
            else{
                res.status(200).json({message:"No data exists", data:response})
            }
        } catch (error) {
            res.status(400).json({error:error.message})
            
        }
        
    }


    LogoutController = async (req,res) => {
        let id = req.params.id
        console.log(id)
        if(id == null || id == undefined){
            res.status(200).json({error:"Please provide id"});
        }else{
            try {
                let response = await User.findOne({
                    where:{
                        id:id
                    }
                });
                if(response == null){
                    res.status(400).json({error:"User dosent exists"});
                }else{
                    res.cookie("AccessToken","");
                    res.cookie("RefreshToken","");
                    res.status(200).json({message:"Logout Successfully"})
                }
            } catch (error) {
                res.status(200).json({error:error.message});
            }
        }
    }
   
}

export default UserController