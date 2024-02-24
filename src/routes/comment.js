import commentController from "../controller/commentController.js";
import isAuthicated from "../middlewares/jwtAuthentication.js";
import { Router } from "express";


const CommentController = new commentController()
const commentRouter = Router()

commentRouter.post("/createcomment",isAuthicated,CommentController.CreateComment);
commentRouter.get("/getallcomment",isAuthicated,CommentController.GetAllComment)
commentRouter.get("/getcommentbyid/:id",isAuthicated,CommentController.GetCommentById)
commentRouter.delete("/deletecommentbyid/:id",isAuthicated,CommentController.UpdateComment)
commentRouter.put("/updatecomment/:id",isAuthicated,CommentController.DeleteComment)
commentRouter.delete("/deleteallcomment",isAuthicated,CommentController.BulkDeleteComment)



export default commentRouter
