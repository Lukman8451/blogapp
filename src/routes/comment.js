import commentController from "../controller/commentController.js";

import { Router } from "express";


const CommentController = new commentController()
const commentRouter = Router()

commentRouter.post("/createcomment",CommentController.CreateComment);
commentRouter.get("/getallcomment",CommentController.GetAllComment)
commentRouter.get("/getcommentbyid/:id",CommentController.GetCommentById)
commentRouter.delete("/deletecommentbyid/:id",CommentController.UpdateComment)
commentRouter.put("/updatecomment/:id",CommentController.DeleteComment)
commentRouter.delete("/deleteallcomment",CommentController.BulkDeleteComment)



export default commentRouter
