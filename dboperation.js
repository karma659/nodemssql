var config =require('./dbconfig');
const sql =require('mssql/msnodesqlv8');

async function getstudents(){
    try{

      let pool = await sql.connect(config);
      let students =await pool.request().query("SELECT * from Table_1");
        return students.recordsets;

    }catch(error){
     console.log(error);
    }
}

async function getstudent(){
    try{

      let pool = await sql.connect(config);
      let student =await pool.request()
      .input('input',sql.Int,roll)
      .query("SELECT * from Table_1 where Id = @input");
        return student.recordsets;

    }catch(error){
     console.log(error);
    }
}


async function addstudent(student){

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('name', sql.NVarChar,student.name )
            .input('email', sql.NVarChar, student.email)
            .input('roll', sql.NVarChar, student.roll)
            .execute('Insertstudent');
        return insertstudent.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}


module.exports={
    getstudents : getstudents ,
    getstudent  : getstudent ,
    addstudent : addstudent
}