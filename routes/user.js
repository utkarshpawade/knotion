const {Router}=require("express");
const userrouter=Router();

function usermiddleware(req, res, next){
    const email=req.body.email;
    const password
}

    



userrouter.post("/signup", function(req, res){

})
userrouter.post("/signin", function(req, res){
    
})
userrouter.get("/purchases", function(req, res){
    
})
module.exports={
    userrouter: userrouter
}