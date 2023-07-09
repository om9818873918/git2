// const User= require('./model/user');

module.exports.profile=function(req,res){
    res.end("<h1>User profile</h1>");
}

module.exports.sign_in=function(req,res){
    res.render("user_sign_in");
    
}
module.exports.sign_up=function(req,res){
    res.render("user_sign_up");
    
}
