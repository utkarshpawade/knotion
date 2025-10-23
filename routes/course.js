const {Router}=require("express");
const courserouter=Router();
const {coursemodel}=require("../db");



courserouter.get("/preview", function(req, res){
    
})

courserouter.post("/purchase", function(req, res){
    
})
module.exports={
    courserouter: courserouter
}