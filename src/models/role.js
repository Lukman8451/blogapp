import database from "../config/database.js";
import { DataTypes,Sequelize } from "sequelize";

const Role = database.define("roles",{
  id:{
    type:DataTypes.UUID,
    primaryKey:true,
    allowNull:false,
    defaultValue:DataTypes.UUIDV4()
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please provide name"
      }
    }
  },
  permissionId:{
    type:DataTypes.UUID,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please provide permission for role"
      }
    }
  },
  createdAt:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:Sequelize.fn("now")
  },
  updatedAt:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:Sequelize.fn("now") 
  }
});

export default Role;