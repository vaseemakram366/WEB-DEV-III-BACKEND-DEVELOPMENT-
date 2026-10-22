use("GoogleDB")


// Create operation 1.insert 2.insertOne 3.insertMany
// db.employee.insert(
//     {
//         empId: 101,
//         Name: "mukesh",
//         salary: 600000,
//         department: "HR",
//         contact: 9274434532,
//         age: 25
//     }
// )

//insertOne
// db.employee.insertOne(
//     {
//         empId: 103,
//         Name: "Ritu",
//         salary: 7900000,
//         department: "IT",
//         contact: 9079158440,
//         age: 19
//     }
// )

//insertMany
// db.employee.insertMany(
//     [
//         {
//             empId: 104,
//             Name: "Ramesh",
//             salary: 750000,
//             department: "IT",
//             contact: 9050116370,
//             age:37
//         },
//         {
//             empId: 105,
//             Name: "Rohit",
//             salary: 750000,
//             department: "Finance",
//             contact: 9002387934,
//             age:37
//         }
//     ]
// )



// Read operation 1.find() 2. findOne
// db.employee.find()
// db.employee.findOne()
// db.employee.find({department: "IT"})
// db.employee.findOne({department: "IT"})


// Update operations 1.updateOne() 2.updateMany()
// db.employee.updateOne(
//     {Name: "Rohit"},
//     {
//         $set:{
//             age:28,
//             salary:900000
//         }
//     }
// )

// db.employee.updateMany(
//     {department: "IT"},
//     {
//         $set:{
//             salary: 950000
//         }
//     }
// )


// delete operations 1. deleteOne() 2.deleteMany

// db.employee.deleteOne({id: 101})
db.employee.deleteMany(
    
)