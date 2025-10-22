const express=require("express");
const app=express();
const {userrouter}=require("./routes/user");
const {courserouter}=require("./routes/course");
const {adminrouter}=require("./routes/admin");

const app=express();

app.use("/user", userrouter);
app.use("/course", courserouter);
app.use("/admin", adminrouter);











app.listen(3000);