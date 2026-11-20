const EventEmitter = require('events');

const emitter = new EventEmitter();

const students=(time) => {
    console.log(`time: ${time} - students should be in the class`);
    
}

emitter.on("bell-rang", students)

// emitter.on("bell-rang",()=>{
//     console.log("Teacher should be the class");
    
// })
emitter.emit("bell-rang","9:00 AM")
emitter.emit("bell-rang","10:00 AM")
emitter.off("bell-rang",students)
emitter.emit("bell-rang","11:00 AM")

