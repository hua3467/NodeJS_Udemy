// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// === above three lines is the same to the following one line. =====

const { MongoClient, ObjectID, Db } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly.");

    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //     _id: id,
    //     name: "Emily",
    //     age: 31
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert documents.");
    //     }
    //     console.log(result.ops); 
    // });
   

    // db.collection("tasks").insertMany([{
    //         description: "See doctor",
    //         completed: false
    //     }, {
    //         description: "Coding.",
    //         completed: false
    //     }],
    //     (error, result) => {
    //         if (error) {
    //             return console.log("Unable to insert documents.");
    //         }
    //         console.log(result.ops);
    //     });

    // db.collection("users").findOne({ name: "Aaron" }, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    // });
    
    // db.collection("users").findOne({_id: new ObjectID("6073af6153ae4c96db3ddf1f")}, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    // });

    // // find() will return a cursor with a lot of functions. 
    // db.collection("users").find({ age: 35 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(users);
    // });

    // db.collection("tasks").findOne({_id: new ObjectID("6073b150af349097a5f3ab3e")}, (error, task) => {
    //     console.log(task);
    // });
    // db.collection("tasks").find({ completed: true }).toArray((error, tasks) => {
    //     console.log(tasks);
    // });

    // const updatePromise = db.collection("users").updateOne({
    //     _id: new ObjectID("6073af6153ae4c96db3ddf20")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // });

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection("tasks").updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection("users").deleteMany({
    //     age: 35
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {  
    //     console.log(error);
    // });

    db.collection("tasks").deleteOne({description: "Clean the house"}).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
});