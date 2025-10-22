const {router}=require("express");
const userrouter=router();






userrouter.post("/signup", function(req, res){

})
userrouter.post("/signin", function(req, res){
    
})
userrouter.get("/purchases", function(req, res){
    
})
module.exports={
    userrouter: userrouter
}