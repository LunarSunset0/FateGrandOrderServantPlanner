const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fategrandorder'
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected....")
    }
});

const publicDirectory = path.join(__dirname,'./public');

app.set('view engine','hbs');
app.use("/", require("./routes/pages"));
/*
app.get("/", (req,res) => {
    res.render("updateItems");
});*/
app.listen(5002, () =>{
    console.log("Server is on port 5000")
})