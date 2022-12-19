var express=require('express');
var router = express.Router();
var app=express();
var cors=require('cors');
var bodyparser=require('body-parser');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use('/api',router);

const {getstudents,getstudent}= require('./Controllers/get');
const {addstudent}= require('./Controllers/post');
const { updatestudent } = require('./Controllers/update');
const { deletestudent } = require('./Controllers/delete');
const {verifyToken } = require('./Middleware/authentication');
const authentication = require('./Middleware/authentication');


router.use((req,res,next)=>{
console.log("middleware");
next();
});

router.get('/students',verifyToken , getstudents);
router.get('/students/:id',verifyToken,getstudent);
router.post('/student',addstudent);
router.put('/student',updatestudent);
router.delete('/student',deletestudent);

router.get('/login',verifyToken,(req,res)=>{
  
    console.log(req.user.roll);
    console.log(req.user);
res.send(req.user);

})

var port = process.env.PORT || 5000 ;
app.listen(port);
console.log("api running on port : "+port);


