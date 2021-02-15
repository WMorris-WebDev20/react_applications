const express = require('express');
const mysql = require("mysql")
const bountyRouter = express.Router();

const db = mysql.createConnection(
    {
        host: 'localhost',  
        user: 'root',
        password: '', 
        database: 'bountyhunter'
    }
)

db.connect((err)=> {
    if (err) {
        throw err; 
    }
    console.log("MySQL Database Connection Established Successfully")
})

bountyRouter.route("/createtable")
.get((req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS bounty( 
        bountyID INT NOT NULL AUTO_INCREMENT,   
        firstName VARCHAR(50) , 
        lastName VARCHAR(50) ,
        bounty INT(50),
        cought VARCHAR(16),
        species VARCHAR(16), 
        PRIMARY KEY (bountyID)
        );`

    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log("Table Created successfully")        
    })
})   

bountyRouter.route("/")
.get((req, res)=>{
    let sql = 'SELECT * FROM bounty;'

    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log("Sussessfully loaded all the data")
        res.send(result)
    })
})

.post((req, res)=>{
    const {firstName, lastName, bounty, cought, species} = req.body
    let sql = `INSERT INTO bounty(firstName, lastName, bounty, cought, species) VALUES('${firstName}', '${lastName}', '${bounty}', '${cought}', '${species}');`

    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log(`Submitted First Name: ${firstName} and Last Name: ${lastName}`)

        let newInfo = 'SELECT * FROM bounty ORDER BY bountyID DESC LIMIT 1';

    db.query(newInfo, (err, result) => {
        if (err){
            throw err;
        }      
        res.send(result) 
    })
    })
})

bountyRouter.route("/:bountyID")
.put((req, res) => {
    const bountyID = req.params.bountyID 
    let {firstName, lastName, bounty, cought, species} = req.body
    let sql = `UPDATE bounty SET  firstName =' ${firstName}', lastName = '${lastName}', bounty = '${bounty}', cought = '${cought}', species = '${species}' WHERE bountyID IN(${bountyID});`

    db.query(sql, (err, result) => {
        if (err){
            throw err;
        } 
        console.log(`Successfully updated data`)

        let newInfo = `SELECT * FROM bounty WHERE bountyID IN(${bountyID})`;
    db.query(newInfo, (err, result) => {
        if (err){
            throw err;
        }      
        res.send(result) 
    })
    })
})

.delete((req, res) => {
    const bountyID = req.params.bountyID;    
    let sql = `DELETE FROM bounty WHERE bountyID IN(${bountyID});`   

    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log(`Successfully deleted ID: ${bountyID}`)               
        res.send(result)  
    })     
})

bountyRouter.route("/completed")
.get((req, res)=>{
    let sql = `SELECT * FROM bounty WHERE cought = 'true'`

    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log("Sussessfully loaded all the data")
        res.send(result)
    })
})

bountyRouter.route("/sorted/:field/:order")
.get((req, res)=>{

    const field = req.params.field
    const order = req.params.order 
    let sql = `SELECT * FROM bounty WHERE cought = 'true' ORDER BY ${field} ${order}`

    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log("Sussessfully loaded all the data")
        res.send(result)
    })
})

bountyRouter.route("/totals")
.get((req, res)=>{
    let sql = `SELECT SUM(bounty) AS Totals from bounty where cought = 'true'`

    db.query(sql, (err, result) => {
        if (err){
            throw err;  
        }
        console.log("Sussessfully loaded all the data")
        res.send(result)
    })
})
 
module.exports = bountyRouter;

