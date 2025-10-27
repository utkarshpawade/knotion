const {Router}=require("express");
const adminrouter=Router();
const {adminmodel}=require("../db");
const {jsonwebtoken}=require("jsonwebtoken");
const {z}=require("zod");

adminrouter.post("/signup", function(req, res){
    const username=req.body.username;
    const password=req.body.password;

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