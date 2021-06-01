require("../src/db/mongoose");
const User = require("../src/models/user");

// 6083742e0f67df9a093770cd

User.findByIdAndUpdate("6083742e0f67df9a093770cd", {age: 2}).then( user => {
    console.log(user);
    return User.countDocuments({ age: 2 })
}).then( result => {
    console.log(result);
}).catch( e => {
    console.log(e);
});