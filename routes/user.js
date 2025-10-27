const {Router}=require("express");
const userrouter=Router();
const {usermodel}=require("../db");
const {z}=require("zod");

const signupschema=z.object({
    email: z.email()({message:"invalid email id"}),
    password: z.string().min(6, {message:"password min should be 6 chars"}),
    firstname: z.string().min(1, {message:"first name is req"}),
    lastname.string().min(1, {message:"lastname is req"})
});



userrouter.post("/signup", function(req, res){
const {email, password, firstname, lastname}=req.body;
const existinguser=await usermodel.findOne({email});
if(existinguser){
    res.json({
        message:"user already exists"
    });
}
const hashedpass=await bcrypt.hash(password, 10);
const user=await usermodel.create({
    email:email,
    password: hashedpass,
    firstname,
    lastname
});
})
userrouter.post("/signin", function(req, res){
    
})
userrouter.get("/purchases", function(req, res){
    
})
module.exports={
    userrouter: userrouter
}