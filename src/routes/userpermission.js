import permission from "../controller/permissionController.js";

import { Router } from "express";
import isAuthicated from "../middlewares/jwtAuthentication.js";



const userpermissionController = new permission()
const UserpermissionRouter = Router()



UserpermissionRouter.post("/createUserpermission/:id",isAuthicated,userpermissionController.CreatePermission);

UserpermissionRouter.put("/updatepermission/:id",isAuthicated,userpermissionController.UpdatePermission)

UserpermissionRouter.get("/GetAllPermission",isAuthicated,userpermissionController.GetAllpermissions);
UserpermissionRouter.get("/getpermissionbyid/:id",isAuthicated,userpermissionController.GetPermissionById)

UserpermissionRouter.delete("/deletepermission/:id",isAuthicated,userpermissionController.DeletePermission)


export default UserpermissionRouter