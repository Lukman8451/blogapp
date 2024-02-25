// import UserRole from "../models/UserRole.js"
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

// class UserroleController{
//     Createrole = async (req,res) =>{
//         let userRole = req.body
//         if(userRole == null || userRole == undefined){
//             res.status(400).json({error:"User role is required"});
//         }else{
//             try {
//                 let response = await UserRole.create(userRole)
//                 if(response){
//                     res.status(201).json({message:"Role Created Successfully",data:response})
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
// export default UserroleController