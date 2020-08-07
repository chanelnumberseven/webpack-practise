const express=require('express');
const app=express();
app.use(express.static('./dist'));
app.listen(8083, ()=>{
    console.log('Server is running at http://localhost:8083')
})