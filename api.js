var Students = require('./Students');
var dboperations=require('./dboperation');


var express=require('express');
var router = express.Router();
var app=express();
var cors=require('cors');
var bodyparser=require('body-parser');


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use('/api',router);


router.use((req,res,next)=>{
console.log("middleware");
next();
});

router.route('/students').get((req,res)=>{

    dboperations.getstudents().then(result =>{
        console.log(result);
        res.json(result);
    } )
    
})

router.route('/students/:id').get((req,res)=>{

    dboperations.getstudent(request.params.id).then(result =>{
        console.log(result);
        res.json(result[0]);
    } )
    
})

router.route('/students').post((request,response)=>{

    let student = {...request.body}

    dboperations.addstudent(student).then(result => {
       response.status(201).json(result);
    })

})



var port = process.env.PORT || 5000 ;
app.listen(port);
console.log("api running on port : "+port);

