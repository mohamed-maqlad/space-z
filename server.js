var express = require("express");

var bodyparser =require("body-parser");

var app = express();
app.set("view-engen","ejs");

app.use("/css",express.static(__dirname+"/public/css")) // for read css file 
app.use("/fonts",express.static(__dirname+"/public/fonts"))// for read fonts file 
app.use("/images",express.static(__dirname+"/public/images"))// for read imges file 
app.use("/js",express.static(__dirname+"/public/js"))// for read js file 

//static data base
let projects=[
    {
        titel:"MARS CURIOSITY ROVER",
        desc:"Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use.",
        id:0 ,
        img:"/images/curious-rover.jpg"
    },
    {
        titel:"INTERTERNATIONAL SPACE STATION",
        desc:"Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something different, something special.",
        id: 1,
        img:"/images/space-station.jpg"
    },
    {
        titel:"INTERTERNATIONAL SPACE STATION 2",
        desc:"Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something different, something special.",
        id: 2,
        img:"/images/space-station.jpg"
    }
]

app.get("/",function(req,res){
    let mission="Welcom to my webside"
    let title= "my space "
    res.render("pages/index.ejs",{mis:mission,title:title,currentpage:"Home"})
})

app.get("/index.html",function(req,res){
    let mission="Welcom to my webside"
    let title= "my space "
    res.render("pages/index.ejs",{mis:mission,title:title,currentpage:"Home"})
})

app.get("/about.html",function(req,res){
    let title="about - Space Science"
    res.render("pages/about.ejs",{title:title,currentpage:"About"})
})

app.get("/projects.html",function(req,res){
    let option={title:"Projects",currentpage:"projects",projects:projects}
    res.render("pages/projects.ejs",option)
})
app.listen(3000);