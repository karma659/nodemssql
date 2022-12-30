var config = require("./dbconfig");
const sql = require("mssql/msnodesqlv8");


let connection = null ;

async function connec() {
   try {
     
       if(connection!=null)
           return connection;
       else {
        const pool = await sql.connect(config);
        connection=pool;
        return connection;
       }

   } catch (error) {
      console.log(error);
   }
}

async function  dbreq(){

   let con = await connec();
   return con.request(); 
}

module.exports = {
   dbreq:  dbreq 

};
