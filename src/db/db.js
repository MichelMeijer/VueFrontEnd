const mariadb = require('mariadb');
  
const pool = mariadb.createPool({
     host: "database", 
     user:"my_user",
     database: "topjobseurope_db",
     password: "secret",
     connectionLimit: 5
});

async function query(sql) {
     let conn;

     conn = await pool.getConnection();
     const result =  conn.query(sql);
     conn.end();

     return result;
}


module.exports.query = query;