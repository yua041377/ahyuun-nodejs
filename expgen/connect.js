var oracledb = require('oracledb');
var dbConfig = require('./dbconfig');

oracledb.getConnection(
    {
    user : dbConfig.user,
    password : dbConfig.password,
    connectString : dbConfig.connectString
    },
    function(err, connection){
        if(err){
            console.error(err.message + "아현 2");
            return; 
         }
    connection.close(
        function(err){
            if(err){
                console.error(err.message);
                return;
            }
        });
    });


function doRelease(connection) {
    connection.release(function (err) {
        if (err) {
            console.error(err.message + "아현3");
        }
    });
}

