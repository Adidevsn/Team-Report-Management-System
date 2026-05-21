const express=require('express');
const router=express.Router();
const AWS=require('aws-sdk');
const multer=require('multer');
const multerS3=require('multer-s3');
const db=require('../config/db');
const s3=new AWS.S3();
const upload=multer({storage:multerS3({
s3:s3,bucket:'team-report-bucket',
key:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)
})});
router.post('/upload',upload.single('report'),(req,res)=>{
db.query('INSERT INTO reports(employee_id,report_name,s3_key) VALUES(?,?,?)',
[req.body.employee_id,req.file.originalname,req.file.key]);
res.json({message:'Report uploaded'});
});
module.exports=router;