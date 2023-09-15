const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
}) 

app.post('/signup', (req, res) => {
    const sql = "INSERT into login(`username`,`password`,`email`,`role`) values(?)";
    const values = [
        req.body.userName,
        req.body.password,
        req.body.email,
        req.body.role
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "select * from login where `username`=? and `password`=?";
    db.query(sql, [req.body.userName,req.body.password,], (err, data) => {
        if (err) {
            return res.json("error");
        }
        if (data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Fail");
        }
    })
})

app.listen(8081, () => {
    console.log("listening");
})