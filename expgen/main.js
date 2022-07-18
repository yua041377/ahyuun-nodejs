const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
const ejs = require('ejs');
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig');

const mainPage = fs.readFileSync('./views/test/index.ejs', 'utf8');
 
app.get('/', (req, res) => {
    var page = ejs.render(mainPage, {
        title: "Temporary Title",
    });
    res.send(page);
});
 
app.get('/getdata?', (req, res) => {

    oracledb.getConnection(
        {
        user : dbConfig.user,
        password : dbConfig.password,
        connectString : dbConfig.connectString
        },
        function(err, connection){
             connection.execute("SELECT * FROM TABLE_NAME", function(err, result, fields){
                
                if(err) throw err;
                else{
                    var page = ejs.render(mainPage, {
                        title: "아현페이지",
                        rows : result.rows,
                    });
                    console.log(page);
                    res.send(page);
                }
            });
        });
});
 
app.listen(3400, () => {
    console.log('Server Running on Port 3400!');
});