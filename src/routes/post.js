import PostController from "../controller/postController.js";

import { Router } from "express";


const postController = new PostController()
const PostRouter = Router()

PostRouter.post("/createpost",postController.CreatePost);
// UserRouter.put()
PostRouter.get("/getallpost",postController.GetAllPost)
PostRouter.get("/getpostbyid/:id",postController.GetPostById)
PostRouter.delete("/deletepostbyid/:id",postController.DeletePost)
PostRouter.put("/updatepost/:id",postController.UpdatePost)
PostRouter.delete("/deleteallpost", postController.BulkDeletePost)

export default PostRouter
