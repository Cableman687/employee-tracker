const express = require('express');
const path = require('path');

// Import and require mysql2
// const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;


// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Include Prompts
const prompts = require("./src/prompts");

//--------------------Master Prompts / Request User Direction------------------------



async function userRequest(){

    welcomeResponse = await prompts.welcomePrompts();

    console.log(welcomeResponse);




}

userRequest();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });