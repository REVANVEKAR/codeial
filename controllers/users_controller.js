module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: 'User Profile'
    })
}

// module.exports.post = function(req,res){
//     res.end('<h1>my post!like it</h1>')
// }