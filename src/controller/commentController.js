import comment from "../models/comment.js";


class CommentController{

    constructor(){

    }

    CreateComment = async (req,res) =>{
        let commentData = req.body
        if(commentData == null || commentData == undefined){
            res.status(400).json({error:"comment data is required"});
        }else{
            try {
                let response = await comment.create(commentData)
                if(response){
                    res.status(201).json({message:"comment Created Successfully",data:response})
                }else{
                    res.status(201).json({error:"Something went wrong please try again"})
                }
            } catch (error) {
                console.log(error)
                res.status(200).json({error:error.message});
            }
        } 
    }

    GetAllComment = async (req,res) =>{
        try {
            let response = await comment.findAndCountAll();
            if(response.count > 0){
                res.status(200).json({data:response})
                res.status(200).json({})
            }else{
                res.status(400).json({message:"No comment  exists",data:response})    
            }
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    GetCommentById = async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await comment.findByPk(id);
                if(response == null){
                    res.status(200).json({message:"No comment exists",data:response})
                }else{
                    res.status(200).json({data:response})
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
    }

    UpdateComment = async (req,res) =>{
        let id = req.params.id
        let commentData = req.body
        if(  commentData == null || commentData == undefined && id == null || id == undefined){
            res.status(400).json({erorr:"please provide id and data"})
        }else{
            try {
                let response = await comment.update(postData,{where:{id:id}});
                if(response > 0){
                    res.status(200).json({data:response,message:"comment Updated Successfully"})
                }else{
                    res.status(400).json({message:"No Data exists",data:response})    
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
        
    }
    
    DeleteComment = async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await comment.destroy({where:{id:id}});
                if(response > 0){
                    res.status(200).json({data:response,message:"comment Deleted Successfully"})
                }else{
                    res.status(400).json({message:"No Data exists",data:response})    
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
    }

    BulkDeleteComment = async (req,res) =>{
        try {
            let response = await comment.truncate();
            if(response==0)
            {
                res.status(200).json({data:response,message: "All Comment Deleted Sucessfully"});
            }
            else{
                res.status(200).json({message:"No data exists", data:response})
            }
        } catch (error) {
            res.status(400).json({error:error.message})
            
        }
        
    }
}


export default CommentController