
const sql = require("mssql/msnodesqlv8");
const { dbreq } = require("../Model/Connection");

const deletestudent = async(req,res)=> {

    let data=req.body ;
    console.log(`${data.roll}`);
    try {
    
     const request = await dbreq();
       let student = await request
          .query(`EXEC usp_student '${data.name}','${data.email}','${data.roll}','DELETE'`);
       console.log(student.recordsets);
       res.json(student.recordsets);
    } catch (error) {
       console.log(error);
    }
 }
 
 
 module.exports = {
    deletestudent:deletestudent
  };
  