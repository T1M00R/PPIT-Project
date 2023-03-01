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

// Create a schema 
const userSchema = new mongoose.Schema({


    
    name: String,
    password: String,
    email: String,
    macronutrients: Array   // protein, fats, carbs ...
    
});

// Select database to use 
const taskModel = mongoose.model('UserData', userSchema);

// suppress warning
mongoose.set('strictQuery', true);  

// Post data to MongoDB
app.post('/api/tasks',(req,res)=>{
  console.log(req.body);

  // Create a new document with fields parsed from form
  userModel.create({

    name: String,
    password: String,
    email: String,
    macronutrients: Array

    
  })
  
  res.send('Data Recieved');
})

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

// // get main html file
// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/../build/index.html'));
//   });

// Server port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})