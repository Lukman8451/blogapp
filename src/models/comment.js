import database from "../config/database.js";
import { DataTypes,Sequelize } from "sequelize";


const comment = database.define("comment",{
  comment_id:{
    type:DataTypes.UUID,
    primaryKey:true,
    allowNull:false,
    defaultValue:DataTypes.UUIDV4()
  },
  post_id:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  user_id:{
    type:DataTypes.STRING,
    allowNull:false,
  
  },
  comment_discp:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          notNull:{
            msg:"Please provide comment discription"
          },
        }
      },
 
  createdAt:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:Sequelize.fn("now")
  }
});

export default comment;