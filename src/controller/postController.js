import Post from "../models/post.js";
//import Post from "../routes/post.js"

class PostController{


    constructor(){

    }

    CreatePost = async (req,res) =>{
        let postData = req.body
        if(postData == null || postData == undefined){
            res.status(400).json({error:"post data is required"});
        }else{
            try {
                let response = await Post.create(postData)
                if(response){
                    res.status(201).json({message:"post Created Successfully",data:response})
                }else{
                    res.status(201).json({error:"Something went wrong please try again"})
                }
            } catch (error) {
                console.log(error)
                res.status(200).json({error:error.message});
            }
        } 
    }

    GetAllPost = async (req,res) =>{
        try {
            let response = await Post.findAndCountAll();
            if(response.count > 0){
                res.status(200).json({data:response})
            }else{
                res.status(400).json({message:"No Post exists",data:response})    
            }
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    GetPostById = async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await Post.findByPk(id);
                if(response == null){
                    res.status(200).json({message:"No Post exists",data:response})
                }else{
                    res.status(200).json({data:response})
                }
            } catch (error) {
                res.status(400).json({error:error.message})
            }
        }
    }

    UpdatePost = async (req,res) =>{
        let id = req.params.id
        let postData = req.body
        if(  postData == null || postData == undefined && id == null || id == undefined){
            res.status(400).json({erorr:"please provide id and data"})
        }else{
            try {
                let response = await Post.update(postData,{where:{id:id}});
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
    
    DeletePost= async (req,res) => {
        let id = req.params.id
        if(id == null || id == undefined){
            res.status(400).json({erorr:"please provide id"})
        }else{
            try {
                let response = await Post.destroy({where:{id:id}});
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
    BulkDeletePost = async (req,res) =>{
        try {
            let response = await Post.truncate();
            if(response==0)
            {
                res.status(200).json({data:response,message: "All Post Deleted Sucessfully"});
            }
            else{
                res.status(200).json({message:"No data exists", data:response})
            }
        } catch (error) {
            res.status(400).json({error:error.message})
            
        }
        
    }

}

export default PostController