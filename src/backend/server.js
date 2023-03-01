//#region Initialisation of server
// Imports n that
const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json - used to retrieve data from the web page , e.g. form fields
app.use(bodyParser.json())
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')))

// Initialize cors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Initialize Mongoose 
const mongoose = require('mongoose');
const internal = require('stream')
main().catch(err => console.log(err));

  

async function main() {   

  // URI to connect to MongoDB Cluster  - FitnessApp = database name 
  var uri = "mongodb+srv://admin:admin@cluster0.bjoyv2i.mongodb.net/FitnessApp?retryWrites=true&w=majority"

  await mongoose.connect(uri);

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


//#endregion


//#region UserSchema and UserModel Creation

// Create a schema 
const userSchema = new mongoose.Schema({


  fname: String,
  lname: String,
  email: {type:String, unique: true},
  password: String,

  
});

// Select database to use 
const userModel = mongoose.model('UserData', userSchema);

// suppress warning
mongoose.set('strictQuery', true);  


//#endregion



//#region POST, GET, UPDATE, DELETE requests

//sign up functionality
app.post("/api/signup", async (req, res) => {
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
    await userModel.create({
      fname: String,
      lname: String,
      email: String,
      password: encryption,
    });

    console.log("User successfully created")

    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});


// // Post data to MongoDB
// app.post('/api/tasks',(req,res)=>{
//   console.log(req.body);

//   // Create a new document with fields parsed from form
//   userModel.create({

//     name: String,
//     password: String,
//     email: String,
//     macronutrients: Array

  
//   })

//   res.send('Data Recieved');
// })




// // Retrieve tasks from database
// app.get('/api/tasks', (req, res) => {
//   taskModel.find((error, data)=>{
//     res.json(data);
//   })
// })

// // Find doc from id
// app.get('/api/task/:id', (req, res)=>{
//   console.log(req.params.id);
//   taskModel.findById(req.params.id,(error,data)=>{
//     res.json(data);
//   })
// })

// // Update a task
// app.put('/api/task/:id', (req, res)=>{
//   console.log("Update: "+req.params.id);

//   taskModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
//     (error,data)=>{
//       res.send(data);
//     })
// })

// // Delete a task
// app.delete('/api/task/:id',(req, res)=>{
//   console.log('Deleting: '+req.params.id);
//   taskModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
//     if(error){
//       res.status(500).send(error);
//     }
//     res.status(200).send(data);
//   })
// })


//#endregion




// // get main html file
// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/../build/index.html'));
//   });

// Server port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})