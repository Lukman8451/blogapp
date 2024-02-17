import database from "../config/database.js";
import { DataTypes,Sequelize } from "sequelize";

const Post = database.define("Post",{
  id:{
    type:DataTypes.UUID,
    primaryKey:true,
    allowNull:false,
    defaultValue:DataTypes.UUIDV4()
  },
  post_img:{
    type:DataTypes.TEXT,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please provide img link"
      }
    }
  },
  post_name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please provide post name"
      }
    }
  },
  post_title:{
    type:DataTypes.STRING,
    allowNull:false,
    },

  post_discription:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please provide post discription"
      },
    }
  },
  createdAt:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:Sequelize.fn("now")
  }
  
});

export default Post;