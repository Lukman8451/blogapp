import PostController from "../controller/postController.js";

import { Router } from "express";


const postController = new PostController()
const PostRouter = Router()

PostRouter.post("/createpost",postController.CreatePost);
// UserRouter.put()
PostRouter.get("/getallpost",postController.GetAllPost)
PostRouter.get("/getpostbyid/:id",postController.GetPostById)
//PostRouter.delete("/deleteUserById/:id",postController.DeleteUser)
//PostRouter.put("/updateUser/:id",postController.UpdateUser)
// UserRouter.delete()


export default PostRouter
