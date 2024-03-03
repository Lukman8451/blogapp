import users from './user.js'
import posts from './post.js'
import comments from './comment.js';
import roles from './role.js'
import permission from './permission.js';

let setAssociations = async() => {
    
    users.hasMany(posts,{foreignKey:'userId',onUpdate:"CASCADE",onDelete:"CASCADE"});
    posts.belongsTo(users)

    posts.hasMany(comments,{foreignKey:"postId",onUpdate:"CASCADE",onDelete:"CASCADE"});
    comments.belongsTo(posts)

    users.hasOne(roles,{foreignKey:'userId',onUpdate:"CASCADE",onDelete:"CASCADE"});
    roles.belongsTo(users)

    permission.hasOne(roles,{foreignKey:'permissionId',onUpdate:"CASCADE",onDelete:"CASCADE"});
    roles.belongsTo(permission)


}


export default setAssociations