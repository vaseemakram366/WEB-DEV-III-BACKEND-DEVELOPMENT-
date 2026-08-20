const express = require("express");
const app=express();
const PORT= 3000

const students = [
    {rollNo:1, name:"Ronaldo", section:"core-b"},
    {rollNo:2, name:"Messi", section:"core-b"},
    {rollNo:3, name:"Lamine", section:"core-b"},
    {rollNo:4, name:"Pele", section:"core-b"},
    {rollNo:5, name:"Mbappe", section:"core-b"},
    
]

// Read Operation
app.get("/students",(req,res)=>{
    res.json(students)
})

// Read operation with id
app.get("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not  found"});
    }
    res.json({success:true,student});
    res.json(student);
})






app.listen(PORT, ()=>console.log("Server is running on port 3000"));
