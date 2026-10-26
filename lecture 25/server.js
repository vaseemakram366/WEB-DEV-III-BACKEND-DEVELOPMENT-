const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;




mongoose.connect("mongodb://localhost:27017/GoogleDB").then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})