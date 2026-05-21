const mysql=require('mysql2');
module.exports=mysql.createConnection({
host:'RDS_ENDPOINT',
user:'admin',
password:'password',
database:'teamdb'
});