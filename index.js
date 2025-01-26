const express = require("express");
const path = require("path");
const app = express();
// const publicpath = path.join(__dirname,online_class);
app.set("view engine","html");

// app.use(expree.static(publicpath));

app.get("/help",(req,resp) =>{
      resp.send("hello");
     
});
app.get("/signup",(req,resp) =>{
     // resp.send("hello");
     resp.render("signup");
    
});







app.listen(5000);