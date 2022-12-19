
const sql = require("mssql/msnodesqlv8");
const { removeAllListeners } = require("nodemon");
const { dbreq } = require("../Model/Connection");

const updatestudent = async(req,res)=> {

     let data=req.body ;
     console.log(`${data.roll}`);
   
    try {
    
     const request = await dbreq();
       let student = await request
          .query(`EXEC usp_student   '${data.name}','${data.email}','${data.roll}','${data.password}','UPDATE'`);
       console.log(student.recordsets);
       res.json(student.recordsets);
    } catch (error) {
       console.log(error);
    }
 }
 
 
 module.exports = {
     updatestudent:updatestudent
  };
  