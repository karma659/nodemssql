var express=require('express');
var router = express.Router();
var app=express();
var cors=require('cors');
var bodyparser=require('body-parser');


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use('/api',router);

const {getstudents,getstudent}= require('./Controllers/get');
const {addstudent}= require('./Controllers/post');
const { updatestudent } = require('./Controllers/update');
const { deletestudent } = require('./Controllers/delete');

router.use((req,res,next)=>{
console.log("middleware");
next();
});

//router.get('/students',getsstudents());
router.get('/students', getstudents)
router.get('/students/:id', getstudent);
router.post('/student',addstudent);
router.put('/student',updatestudent);
router.delete('/student',deletestudent);


var port = process.env.PORT || 5000 ;
app.listen(port);
console.log("api running on port : "+port);


