import UserController from "../controller/userController.js";

import { Router } from "express";
import isAuthicated from "../middlewares/jwtAuthentication.js";


const userController = new UserController()
const UserRouter = Router()

UserRouter.post("/createUser",userController.CreateUser);
UserRouter.post("/loginUser",userController.LoginController)

UserRouter.put("/updateUser/:id",isAuthicated,userController.UpdateUser)
UserRouter.put("/logoutUser/:id",isAuthicated,userController.LogoutController)

UserRouter.get("/getAllUsers",isAuthicated,userController.GetAllUsers)
UserRouter.get("/getUserById/:id",isAuthicated,userController.GetUserById)

UserRouter.delete("/deleteUserById/:id",isAuthicated,userController.DeleteUser)
UserRouter.delete("/deleteallusers",isAuthicated,userController.BulkDeleteUsers)

export default UserRouter
