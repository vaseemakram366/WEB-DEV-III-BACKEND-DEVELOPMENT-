const bcrypt = require("bcrypt");
const { log } = require("node:console");

const password="Jack@1234"
const passwordcopy="jack@1234"

const excryptPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    console.log("Salt:",salt);
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password:",hashedPassword);

    const isMatch=await bcrypt.compare("Jack@1234",hashedPassword)
    console.log("Password Match:",isMatch);
    
    
    
}

excryptPassword(password)
// excryptPassword(passwordcopy)