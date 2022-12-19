
const { dbreq } = require("../Model/Connection");
const jwt =require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const addstudent=async(req,res)=> {
     // Get user input
   let {name,email , roll ,password}=req.body ;

    try {
              // Validate user input
      if (!(email && password && roll && name)) {
         res.status(400).send("All input is required");
       }

       const request = await dbreq();
    // check if user already exist
    // Validate if user exist in our database
       const oldStudent = await request.query(`SELECT roll from Table_1 where roll=${roll}`);
    
       
       console.log(oldStudent.recordsets[0][1]);

       if (oldStudent.recordsets[0][1]) {
         return res.status(409).send("Student Already Exist. Please Login");
       }
     
   
   // Create user in our database
       let insertstudent = await 
          request
          .query(`EXEC usp_student '${name}','${email}','${roll}','${password}','INSERT'`);
          console.log("student successfully created");
       
 //create token
 const user={ name:name,email:email,roll:roll }
   const token = jwt.sign(user,process.env.Token_key,{expiresIn:"15s" });
    // save user token
    console.log(process.env.Token_key)
    console.log(token);

    res.cookie("token",token,{httpOnly:true});
    res.status(201).json({accesstoken:token});
  } catch (err) {
   console.log(err);
}
}
 
 
module.exports = {
    
    addstudent: addstudent
 };
 