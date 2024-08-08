const express =require("express")
const path = require('path');

const app=express();

const port=3000;
 
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", 'ejs')




app.get("/home",(req,res)=>{
   
   
    
    res.render("home.ejs")
    
})
app.listen(port,()=>{
    console.log("server is running at port 3000 ")
})
