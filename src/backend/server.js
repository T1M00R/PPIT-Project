//use express
const express = require("express");
const app = express();
//mongoDB database
const mongoose = require("mongoose");
app.use(express.json());
//used to allow the domain to be used by the main file
const cors = require("cors");
app.use(cors());
//used to encryptpassword
const bcrypt = require("bcrypt");
//used for decrypting password from database to verify
const jwt = require("jsonwebtoken");
//jwt secret - random numbers used to decrypt
const JWT_SECRET = "asdhabsdkasbdaksbd1235245h34b1j2hb312h3b14235hb0sdf90)JF)9djiojsdjfns234553";
port = 5000;

//database link
const mongoUrl = "mongodb+srv://admin:admin@ppit.ynetmgv.mongodb.net/?retryWrites=true&w=majority";

//connect to database
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

//use Schema
require("./userDetails");
const User = mongoose.model("UserInfo");

//sign up functionality
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  //variable to encrypt password
  const encryption = await bcrypt.hash(password, 10);

  try {
    //if user already exists give back error
    const oldUser = await User.findOne({email});
    if(oldUser){

        return res.json({error: "User Exists" });
    }

    //data that will be on database
    await User.create({
      fname,
      lname,
      email,
      password:encryption,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

//log in functionality
app.post("/login", async (req,res)=>{
    //get email and password
    const {email, password} = req.body;

    //checking if email exists
    const user = await User.findOne({email});

    if(!user){

        return res.json({error: "User not found" });
    }

    //compare password with decrypted password
    if(await bcrypt.compare(password, user.password)){
        //create token with the random digits
        const token = jwt.sign({email: user.email}, JWT_SECRET);

        if(res.status(201)){
            return res.json({ status:"ok", data: token });
        }
        else{
            return res.json({ error: "error" });
        }
    }

    //only possible error left is incorrect password
    res.json({status: "error", error: "Password entered is incorrect"});
});

//api to revert to home page once login complete
app.post("/home", async(req, res)=>{
    const {token} = req.body;
    
    try{
        //verify the login and store in user
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        //if user is verified
        User.findOne({ email: useremail }).then((data)=>{
            res.send({ status: "ok", data: data });
        }).catch((error)=>{
            res.send({ status: "error", data: data });
        });
    }catch(error){}
});

app.listen(port, ()=>{
    console.log("server Connected");
});