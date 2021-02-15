const Posts = require('./../models/posts')// refiere a los modelos de los docs posts y users
const Users = require('./../models/users')

function getAll(){
   const allPosts = Posts.find({})
    // for(key in allPosts){
    //     user_id = allPosts[key].user_id
    //     userObj = Users.findOne(user_id)
    //     allPosts[key].name = userObj.name
    //     allPosts[key].lastName = userObj.lastName

    // }
   return allPosts

}
function getUserByIdPost(user_id){
    return Users.findOne(user_id)
}
function getById(id){
    return Posts.findById(id)
 }

function create(date, picUrl, savedPost, tags, text, title, user_id){
    return Posts.create({date, picUrl, savedPost, tags, text, title, user_id})
}

function deleteById (id){
    return Posts.findByIdAndDelete(id)
}
function updateById (id, date, picUrl, savedPost, tags, text, title){
    return Posts.findByIdAndUpdate(id, {date, picUrl, savedPost, tags, text, title})
}


 module.exports = {
     getAll,
     getById,
     create,
     deleteById,
     updateById,
     getUserByIdPost
 }