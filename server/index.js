const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/Users")
const bodyParser = require('body-parser')
const cors = require('cors')
const url = require("./url")

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));

mongoose.connect(url)

app.route("/users").get(function(req, res) {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}).post(async (req, res) => {
    console.log(req.body)
    const user = req.body
    const createUser = new UserModel(user)

    await createUser.save((err) => {
        if (!err) {
            res.json("User was added")
        } else {
            res.json(err)
        }
    })
})

app.route("/users/:username").get(function(req, res){
    UserModel.findOne({username: req.params.username}, function(err, foundUser){
      if (!err){
        res.json(foundUser); 
      } else {
        res.json(err);
      }
    });
  });

  app.route("/users/:username/:password").get(function(req, res){
    UserModel.findOne({
      username: req.params.username,
      password: req.params.password
    }, function(err, foundUser){
      if (!err){
        res.json(foundUser); 
      } else {
        res.json(err);
      }
    });
  });

  app.route("/users/:username/logs/").patch(function(req, res) {
    UserModel.updateOne({username: req.params.username}, {
      $push: {
        logs: "what"
      }
    })
  })

app.listen(3001, () => {
    console.log("Server is running")
})