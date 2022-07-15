const express = require('express');
const app = express();
const fs = require('fs');
const ejs = require('ejs');
var dbConfig = require('./dbconfig');

oracledb.getConnection(
    {
    user : dbConfig.user,
    password : dbConfig.password,
    connectString : dbConfig.connectString
    });

 
const mainPage = fs.readFileSync('./views/test/index.ejs', 'utf8');
 
app.get('/', (req, res) => {
    var page = ejs.render(mainPage, {
        title: "Temporary Title",
    });
    res.send(page);
});
 
app.get('/getdata?', (req, res) => {

    console.log('여긴 오는거야?');
    
    connection.execute("SELECT * FROM TABLE_NAME", function(err, result, fields){
        if(err) throw err;
        else{
            var page = ejs.render(mainPage, {
                title: "아현페이지",
                data: result,
            });
            res.send(page);
            console.log(page);
        }
    });
});
 
app.listen(3400, () => {
    console.log('Server Running on Port 3400!');
});