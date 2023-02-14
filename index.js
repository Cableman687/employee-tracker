//Include Prompts
const prompts = require("./src/prompts");


// Import and require mysql2 & express
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: 'password123',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the employeeTracker_db database.`)
  );


console.log("Server file triggered");

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

//--------------------Master Prompts / Request User Direction------------------------



async function userRequest(){

   

    welcomeResponse = await prompts.welcomePrompts();

    console.log(welcomeResponse);




}

userRequest();

