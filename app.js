const express = require("express");
const path = require("path");
const app = express();

const slist = [

{"idno":"0001","lastname":"yao","firstname":'Ralph','course':'BSIT','level':'3'},
{"idno":"0002","lastname":"yao2","firstname":'Ralph2','course':'BSIT','level':'3'},
{"idno":"0003","lastname":"yao3","firstname":'Ralph3','course':'BSIT','level':'3'},
{"idno":"0004","lastname":"yao4","firstname":'Ralph4','course':'BSIT','level':'3'}

]

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({"extended":true}));
app.use(express.json());

app.get("/studentlist",(req,res)=>{
	res.status(200).send(slist);
});

app.get("/",(req,res)=>{
	res.render("index.html");
});

app.listen("4321",()=>{
	console.log("listening to port 4321");
});

