import database from "../config/database.js";
import { DataTypes,Sequelize } from "sequelize";

const User = database.define("users",{
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
  surname:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please provide surname"
      }
    }
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:{
      msg:"Email Already Exists"
    },
    validate:{
      notNull:{
        msg:"Please provide email"
      },
      isEmail:{
        msg:"Invalid Email"
      }
    }
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please provide password"
      },
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

export default User;