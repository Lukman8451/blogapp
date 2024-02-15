import UserController from "../controller/userController.js";

import { Router } from "express";


const userController = new UserController()
const UserRouter = Router()

UserRouter.post("/createUser",userController.CreateUser);
// UserRouter.put()
UserRouter.get("/getAllUsers",userController.GetAllUsers)
UserRouter.get("/getUserById/:id",userController.GetUserById)
UserRouter.delete("/deleteUserById/:id",userController.DeleteUser)
// UserRouter.delete()

export default UserRouter