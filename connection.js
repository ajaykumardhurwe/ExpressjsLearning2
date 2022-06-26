const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbproject",
    port:3008
});

con.connect((err)=>{
    if(err) throw err;
    console.log("connection created...!");
})

module.exports.con=con;