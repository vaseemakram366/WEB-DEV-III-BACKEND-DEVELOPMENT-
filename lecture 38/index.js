const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("bell-rang",()=> {
    console.log("Students should be in the class");
    
})

emitter.on("bell-rang",()=>{
    console.log("Teacher should be the class");
    
})
emitter.emit("bell-rang")

