const express =require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sign-up.html");
});

app.post("/",function(req,res){
    var firstname=req.body.fn;
    var lastname=req.body.ln;
    var email=req.body.email;
    console.log(firstname,lastname,email);
});
app.listen("3000",function(){
    console.log("you server is  runing at port 3000");
    console.log(__dirname);
});



// apikey
// 433c402ccf8e47c362c58133aae7111a-us11