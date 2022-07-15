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

         connection.execute("select * from TABLE_NAME", [], function (err, result) {
            if (err) {
                console.error(err.message + "아현1");
                doRelease(connection);
                return;
            }
            console.log(result.metaData);  //테이블 스키마
            console.log(result.rows);  //데이터
            doRelease(connection);
            console.log('Connection was successful!');
        });
            
    
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

