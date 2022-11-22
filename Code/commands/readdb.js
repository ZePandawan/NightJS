const config_file = require("../../Config/mysql_config.json");

const Database = require('./Database.js');
const db = new Database(config_file);
exports.run = async (client, interaction) => {
    let result_db;
    //const db = mysql.createConnection({ host: `${my_host}`, user: `${my_user}`, password: `${my_password}`, database:"nightjs"});

    //db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });

    //db.query("SELECT idServer as 'id_server', name as 'name', nbMembers as 'nb_members', idOwner as 'id_owner', joinHour as 'join_hour' FROM Server;", function (err, result) {       if (err) throw err; result_db = result; console.log(result);});
    await db.connect();
    const requete = 'SELECT * FROM Server';
    const { rows: result } = await db.query(requete);
    console.log(result[0]);
    await interaction.reply(result[0].name);


    //console.log(result_db.id_data);
};