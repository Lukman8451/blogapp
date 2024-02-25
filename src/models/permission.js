import database from "../config/database.js";
import { DataTypes,Sequelize } from "sequelize";


const permission = database.define("permissions",{
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4()
    },
    create:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    update:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    view:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    delete:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
})

export default permission;
