const {Router}=require("express");
const adminrouter=Router();
const {adminmodel}=require("../db");
adminrouter.post("/signup", function(req, res){

})
adminrouter.post("/signin", function(req, res){
    
})
adminrouter.get("/course/bulk", function(req, res){
    
})
adminrouter.post("/course", function(req, res){
    
})
adminrouter.put("/course", function(req, res){
    
})
module.exports={
    adminrouter: adminrouter
}