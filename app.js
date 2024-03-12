const express = require("express");
const path = require("path");
const app = express();

const slist = [
	{'idno':'0001','lastname':'durano','firstname':'alpha','course':'bscpe','level':'4'},
	{'idno':'0002','lastname':'hotel','firstname':'bravo','course':'bsit','level':'1'},
	{'idno':'0003','lastname':'zulu','firstname':'charlie','course':'bsis','level':'2'},
	{'idno':'0004','lastname':'india','firstname':'delta','course':'bsim','level':'3'},
	{'idno':'0005','lastname':'november','firstname':'echo','course':'act','level':'4'},
	{'idno':'0006','lastname':'charlie','firstname':'foxtrot','course':'bscs','level':'2'},
	{'idno':'0007','lastname':'bravo','firstname':'golf','course':'bscs','level':'4'},
	{'idno':'0008','lastname':'durano','firstname':'alpha','course':'bscpe','level':'4'},
	{'idno':'0009','lastname':'hotel','firstname':'bravo','course':'bsit','level':'1'},
	{'idno':'0010','lastname':'zulu','firstname':'charlie','course':'bsis','level':'2'},
	{'idno':'0011','lastname':'india','firstname':'delta','course':'bsim','level':'3'},
	{'idno':'0012','lastname':'november','firstname':'echo','course':'act','level':'4'},
	{'idno':'0013','lastname':'charlie','firstname':'foxtrot','course':'bscs','level':'2'},
	{'idno':'0014','lastname':'bravo','firstname':'golf','course':'bscs','level':'4'},
	{'idno':'0015','lastname':'durano','firstname':'alpha','course':'bscpe','level':'4'},
	{'idno':'0016','lastname':'hotel','firstname':'bravo','course':'bsit','level':'1'},
	{'idno':'0017','lastname':'zulu','firstname':'charlie','course':'bsis','level':'2'},
	{'idno':'0018','lastname':'india','firstname':'delta','course':'bsim','level':'3'},
	{'idno':'0019','lastname':'november','firstname':'echo','course':'act','level':'4'},
	{'idno':'0020','lastname':'charlie','firstname':'foxtrot','course':'bscs','level':'2'},
	{'idno':'0021','lastname':'bravo','firstname':'golf','course':'bscs','level':'4'},
	{'idno':'0022','lastname':'durano','firstname':'alpha','course':'bscpe','level':'4'},
	{'idno':'0023','lastname':'hotel','firstname':'bravo','course':'bsit','level':'1'},
	{'idno':'0024','lastname':'zulu','firstname':'charlie','course':'bsis','level':'2'},
	{'idno':'0025','lastname':'india','firstname':'delta','course':'bsim','level':'3'},
	{'idno':'0026','lastname':'november','firstname':'echo','course':'act','level':'4'},
	{'idno':'0027','lastname':'charlie','firstname':'foxtrot','course':'bscs','level':'2'},
	{'idno':'0028','lastname':'bravo','firstname':'golf','course':'bscs','level':'4'},
];

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

