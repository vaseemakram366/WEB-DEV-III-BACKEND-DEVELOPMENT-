const express = require("express");
const app=express();
const PORT= 3000

app.use(express.json()); // it handles thhe json data coming from the client//encode
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


// Create
app.post("/students",(req, res)=>{
    const data = req.body;
    students.push({rollNo:students.length+1,...data});
    res.json({success:true, message:"student created successfully", data});
})

// Update
app.put("/students/:rollNo", (req, res)=>{
    const id = req.params.rollNo;
    const data = req.body;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not  found"});
    }
    student.name=data.name;
    student.section=data.section;
    res.json({success:true,student});
})

// Delete

app.delete("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not  found"});
    }
    student.splice(students.indexOf(student),1 );
    res.json({
        success:true,
        message:"student deleted successfully"
    })
    
})

app.listen(PORT, ()=>console.log("Server is running on port 3000"));
