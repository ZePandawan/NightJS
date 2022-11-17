const config_file = require("../../Config/mysql_config.json");
const mysql = require("mysql");

exports.run = async (client, interaction) => {
    let result_db;
    //const db = mysql.createConnection({ host: `${my_host}`, user: `${my_user}`, password: `${my_password}`, database:"nightjs"});
    const db = mysql.createConnection(config_file);

    //db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });

    //db.query("SELECT idServer as 'id_server', name as 'name', nbMembers as 'nb_members', idOwner as 'id_owner', joinHour as 'join_hour' FROM Server;", function (err, result) {       if (err) throw err; result_db = result; console.log(result);});

    db.query('SELECT * FROM Server', function (err, result){
        if (err) throw err;
        console.log("Result: " + result.map(e => e.name));
    });


    //console.log(result_db.id_data);
};