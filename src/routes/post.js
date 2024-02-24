import PostController from "../controller/postController.js";
import isAuthicated from "../middlewares/jwtAuthentication.js";
import { Router } from "express";


const postController = new PostController()
const PostRouter = Router()

PostRouter.post("/createpost",isAuthicated,postController.CreatePost);
// UserRouter.put()
PostRouter.get("/getallpost",isAuthicated,postController.GetAllPost)
PostRouter.get("/getpostbyid/:id",isAuthicated,postController.GetPostById)
PostRouter.delete("/deletepostbyid/:id",isAuthicated,postController.DeletePost)
PostRouter.put("/updatepost/:id",isAuthicated,postController.UpdatePost)
PostRouter.delete("/deleteallpost",isAuthicated, postController.BulkDeletePost)

export default PostRouter
