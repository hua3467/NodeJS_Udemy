require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("608345829dfc088cde240721").then( task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then( result => {
    console.log(result);
}).catch( e => {
    console.log(e);
});