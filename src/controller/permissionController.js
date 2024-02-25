// import permissions from "../models/permission.js";

// class permission{

//     CreatePermission = async (req,res) =>{
//         let permissionData = req.body
//         if(permissionData == null || permissionData == undefined){
//             res.status(400).json({error:"User permission is required"});
//         }else{
//             try {
//                 let response = await permissions.create(permissionData)
//                 if(response){
//                     res.status(201).json({message:"Permission Created Successfully",data:response})
//                 }else{
//                     res.status(201).json({error:"Something went wrong please try again"})
//                 }
//             } catch (error) {
//                 console.log(error)
//                 res.status(200).json({error:error.message});
//             }
//         } 
//     }

//     UpdatePermission = async (req,res) =>{
//         let userData = req.body
//         let id = req.params.id
//         if(userData == null || userData == undefined){
//             res.status(400).json({error:"User permission is required"});
//         }else{
//             if(id == null || id == undefined){
//                 res.status(400).json({error:"please provide the id"});
//             }else{
//                 try {
//                     let response = await permissions.update(userData,{where:{id:id}});
//                     if(response > 0){
//                         res.status(201).json({message:"Permission updated Successfully",data:response})
//                     }else{
//                         res.status(400).json({error:"Something went wrong please try again"})
//                     }
//                 } catch (error) {
//                     console.log(error)
//                     res.status(200).json({error:error.message});
//                 }
//             }
//         } 
//     }

//     GetAllpermissions = async (req,res) =>{
//         let userData = req.body
//         if(userData == null || userData == undefined){
//             res.status(400).json({error:"User permission is required"});
//         }else{
//             try {
//                 let response = await permissions.create(userData)
//                 if(response){
//                     res.status(201).json({message:"Permission Created Successfully",data:response})
//                 }else{
//                     res.status(201).json({error:"Something went wrong please try again"})
//                 }
//             } catch (error) {
//                 console.log(error)
//                 res.status(200).json({error:error.message});
//             }
//         } 
//     }

//     GetPermissionById = async (req,res) =>{
//         let userData = req.body
//         if(userData == null || userData == undefined){
//             res.status(400).json({error:"User permission is required"});
//         }else{
//             try {
//                 let response = await permissions.create(userData)
//                 if(response){
//                     res.status(201).json({message:"Permission Created Successfully",data:response})
//                 }else{
//                     res.status(201).json({error:"Something went wrong please try again"})
//                 }
//             } catch (error) {
//                 console.log(error)
//                 res.status(200).json({error:error.message});
//             }
//         } 
//     }

//     DeletePermission = async (req,res) =>{
//         let userData = req.body
//         if(userData == null || userData == undefined){
//             res.status(400).json({error:"User permission is required"});
//         }else{
//             try {
//                 let response = await permissions.create(userData)
//                 if(response){
//                     res.status(201).json({message:"Permission Created Successfully",data:response})
//                 }else{
//                     res.status(201).json({error:"Something went wrong please try again"})
//                 }
//             } catch (error) {
//                 console.log(error)
//                 res.status(200).json({error:error.message});
//             }
//         } 
//     }

//     BulkDeletePermissions = async (req,res) =>{
//         let userData = req.body
//         if(userData == null || userData == undefined){
//             res.status(400).json({error:"User permission is required"});
//         }else{
//             try {
//                 let response = await permissions.create(userData)
//                 if(response){
//                     res.status(201).json({message:"Permission Created Successfully",data:response})
//                 }else{
//                     res.status(201).json({error:"Something went wrong please try again"})
//                 }
//             } catch (error) {
//                 console.log(error)
//                 res.status(200).json({error:error.message});
//             }
//         } 
//     }

    



// }
// export default permission