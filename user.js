const {router}=require("express");
const userrouter=router();






userrouter.post("/user/signup", function(req, res){

})
userrouter.post("/user/signin", function(req, res){
    
})
userrouter.get("/user/purchases", function(req, res){
    
})
module.exports={
    userrouter: userrouter
}