import users from './user.js'
import posts from './post.js'
import comments from './comment.js';
// import Userpermission from './permission.js';
// import Userrole from './UserRole.js';

let setAssociations = async() => {
    
    users.hasMany(posts,{foreignKey:'userId',onUpdate:"CASCADE",onDelete:"CASCADE"});
    posts.belongsTo(users)

    posts.hasMany(comments,{foreignKey:"postId",onUpdate:"CASCADE",onDelete:"CASCADE"});
    comments.belongsTo(posts)

    // users.hasOne(Userrole,{foreignKey:'UserId',onUpdate:"CASCADE",onDelete:"CASCADE"});
    // users.belongsTo(Userrole)

    // Userrole.hasMany(Userpermission,{foreignKey:'id',onUpdate:"CASCADE",onDelete:"CASCADE"});
    // Userrole.belongsTo(Userpermission)

}


export default setAssociations