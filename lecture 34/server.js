const jwt=require("jsonwebtoken")

const data={
    _id:"45hfg45t87wfshw4h54hrvf"
}

const token=jwt.sign(data,"thisisasecret",{expiresIn:"10d"})
console.log(token);

const decoded = jwt.verify(token, 'thisisasecret');
console.log(decoded);
