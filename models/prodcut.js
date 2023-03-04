
// יצירות חיבור לבסיס הנתןנים MYSQL  
// ולקרוא לסיסמא והשם משתמש ממקום 

const dotenv = require('dotenv');

dotenv.config();
const mysql = require('mysql');
const connection = mysql.createConnection({
 host: process.env.HOST,
 user: process.env.USER,
 password: process.env.PASSWORD,
 database: process.env.DATABASE
});
connection.connect();

connection.destroy();/// פקודה לסגירת ההתחברות 
