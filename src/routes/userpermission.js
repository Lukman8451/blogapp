import permission from "../controller/permissionController.js";

import { Router } from "express";
import isAuthicated from "../middlewares/jwtAuthentication.js";



const userpermissionController = new permission()
const UserpermissionRouter = Router()



UserpermissionRouter.post("/createUserpermission/:id",isAuthicated,userpermissionController.CreatePermission);

export default UserpermissionRouter