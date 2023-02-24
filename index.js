const express = require("express")
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors') // so that you can connect to React

app.use(express.json()); // or else any requests that involve body give an error
app.use(cors());

mongoose.connect("mongodb+srv://Stan:cap@cluster0.qpmzq1j.mongodb.net/merntutorial?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

});

// tells API to start
app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});  

