const sql = require("mssql/msnodesqlv8");
const { dbreq } = require("../Model/Connection");



const getstudents= async(req,res)=> {
   
   try {
      const request = await dbreq();
      let students = await request.query("EXEC usp_student '','','','','SELECT'");
    
      res.json(students.recordsets);
   } catch (error) {
      console.log(error);
   }
}

const getstudent = async(req,res)=> {

   try {
      const roll= req.params.id;
      console.log(roll);
    const request = await dbreq();
      let student = await request
         .query(`SELECT * from Table_1 where roll=${roll}`);

      res.json(student.recordsets);
   } catch (error) {
      console.log(error);
   }
}


module.exports = {
    getstudents:getstudents,
    getstudent: getstudent
 };
 