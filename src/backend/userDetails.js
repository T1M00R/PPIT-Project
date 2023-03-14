const mongoose = require("mongoose");

//create schema to store in database

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    //make sure user doesnt already exist
    email: {type:String, unique: true},
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);