import users from './user.js'
import posts from './post.js'
import comments from './comment.js';

let setAssociations = async() => {
    
    users.hasMany(posts,{foreignKey:'userId',onUpdate:"CASCADE",onDelete:"CASCADE"});
    posts.belongsTo(users)

    posts.hasMany(comments,{foreignKey:"postId",onUpdate:"CASCADE",onDelete:"CASCADE"});
    comments.belongsTo(posts)

}


export default setAssociations