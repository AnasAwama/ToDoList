var express = require('express');
var cors = require('cors');
const mysql= require('mysql');
var app = express();
app.use(cors());

var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
app.use(urlEncoded);
app.use(express.static('public'));
var Parser = bodyParser.json();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
});

function executeQuery(sql, res) {
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
}


app.get('/list', Parser, async(req, res)=> {
    const sql = "select * from list";
    executeQuery(sql, res);
})

app.get('/status', Parser, async(req, res)=> {
    const sql = "select * from taskstatus";
    executeQuery(sql, res);
})

app.get('/priority', Parser, async(req, res)=> {
    const sql = "select * from priority";
    executeQuery(sql, res);
})

app.get('/tasks', async(req, res)=> {
    const sql = "select * from task";
    executeQuery(sql, res);
})

var server=app.listen(8081,function(){
    var host = server.address().address
    var port= server.address().port
    console.log("working",host,port)
})