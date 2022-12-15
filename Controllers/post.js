
const { dbreq } = require("../Model/Connection");

const addstudent=async(req,res)=> {
   
   let data=req.body ;
   console.log(`${data.roll}`);
//     let {...student}=req.body;
//      console.log(student);
//   const myJSON = JSON.stringify(student);
//     console.log(myJSON);

    try {
      const request = await dbreq();
 
       let insertstudent = await 
          request
          .query(`EXEC usp_student '${data.name}','${data.email}','${data.roll}','INSERT'`);
 
        res.status('201').json(insertstudent.recordsets);
    } catch (err) {
       console.log(err);
    }
 }
 
 
module.exports = {
    
    addstudent: addstudent
 };
 