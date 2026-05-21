const express=require('express');
const reportRoutes=require('./routes/reportRoutes');
const app=express();
app.use(express.json());
app.use('/api/reports',reportRoutes);
app.listen(3000,()=>console.log('Server running'));
