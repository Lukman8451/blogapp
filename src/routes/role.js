import Role from "../controller/rolesController.js";

import { Router } from "express";
import isAuthicated from "../middlewares/jwtAuthentication.js";



const RoleController = new Role()
const RoleRouter = Router()



RoleRouter.post("/createRole",RoleController.CreateRole);

RoleRouter.put("/updateRole/:id",RoleController.UpdateRole)

RoleRouter.get("/GetAllRoles",RoleController.GetAllRoles);
RoleRouter.get("/getRolebyid/:id",RoleController.GetRoleById)

RoleRouter.delete("/deleteRole/:id",RoleController.DeleteRole)

export default RoleRouter