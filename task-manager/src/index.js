const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT ||3000;

app.use(express.json())

// client post data to server
app.post("/users", (req, res) => {

    // req.body is the data posted from the client side 
    const user = new User(req.body);
    user.save().then(() => {
        // if the status is 201(Created), send back the information to the client
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });

});


// client get data from server
app.get('/users', (req, res) => {
    User.find({}).then( (users) => {
        res.send(users);
    }).catch( e => {
        res.status(500).send();
    })
})

/**
 * Note:
 * The findById method will throw an error if the id you pass it is improperly formatted so you should see a 500 error most of the time. 
 * However, if you pass in an id that is validly formatted, but does not exist in the database then you will get the 404 sent back.
 */
// get user by id
app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then( (user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    }).catch( e => {
        res.status(500).send();
    })
})

app.post("/tasks", (req, res) => {

    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send(user);
    }).catch(e => {
        res.status(400).send(e);
    });

});

app.get("/tasks", (req, res) => {
    Task.find({}).then( tasks => {
        res.send(tasks);
    }).catch( e => {
        res.status(500).send(e);
    });
})

app.get("/tasks/:id", (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then( task => {
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }).catch( e => {
        res.status(500).send();
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port);
});