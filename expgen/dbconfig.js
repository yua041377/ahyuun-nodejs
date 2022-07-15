module.exports = {

    user : process.env.NODE_ORACLEDB_USER || 'ahyun',
    password : process.env.NODE_ORACLEDB_PASSWORD || 'ahyun',
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost/xe'
};