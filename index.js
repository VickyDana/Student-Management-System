const express = require('express');
const mongoose = require('mongoose');
const DB = require("./config/studentConfig");
const studentRoutes = require('./routes/studentRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3865;

 
mongoose.connect(DB.db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to the database.")
}).catch (err=>{
    console.log("Not connected to the database.", err);
    process.exit();
}) ;

app.use(express.json());

app.use('/students', studentRoutes);
app.use('/users', userRoutes );


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});