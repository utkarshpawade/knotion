const express=require("express");
const mongoose = require("mongoose");
const app=express();
const {userrouter}=require("./routes/user");
const {courserouter}=require("./routes/course");
const {adminrouter}=require("./routes/admin");
app.use("/user", userrouter);
app.use("/course", courserouter);
app.use("/admin", adminrouter);

async function main(){
    await mongoose.connect("mongodb+srv://admin:kingnapoleon@cluster0.zhlzacg.mongodb.net/")
    
app.listen(3000);
    console.log("Server started");
}
main();







