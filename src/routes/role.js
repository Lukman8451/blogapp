import Role from "../controller/rolesController.js";

import { Router } from "express";
import isAuthicated from "../middlewares/jwtAuthentication.js";
import PermissionAuthorization from "../middlewares/permission.js";



const RoleController = new Role()
const RoleRouter = Router()



RoleRouter.post("/createRole",isAuthicated,PermissionAuthorization,RoleController.CreateRole);

RoleRouter.put("/updateRole/:id",isAuthicated,PermissionAuthorization,RoleController.UpdateRole)

RoleRouter.get("/GetAllRoles",isAuthicated,PermissionAuthorization,RoleController.GetAllRoles);
RoleRouter.get("/getRolebyid/:id",isAuthicated,PermissionAuthorization,RoleController.GetRoleById)
RoleRouter.get("/getRoleByUserId/:id",isAuthicated,PermissionAuthorization,RoleController.GetRoleByUserId)

RoleRouter.delete("/deleteRole/:id",isAuthicated,PermissionAuthorization,RoleController.DeleteRole)

export default RoleRouter