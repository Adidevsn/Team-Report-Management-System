exports.handler=async()=>{
console.log('Scheduled report processing started');
return {statusCode:200,body:JSON.stringify({message:'Reports processed'})};
};