import database from "../config/database.js";
import { DataTypes,Sequelize } from "sequelize";


const comment = database.define("comments",{
  comment_id:{
    type:DataTypes.UUID,
    primaryKey:true,
    allowNull:false,
    defaultValue:DataTypes.UUIDV4()
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