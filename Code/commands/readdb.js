const config_file = require("../../Config/mysql_config.json");

const Database = require('./Database.js');
const db = new Database("bot.nightjs.ovh", "njs_admin", "toutnwar619!", "nightjs");
exports.run = async (client, interaction) => {
    let result_db;
    //const db = mysql.createConnection({ host: `${my_host}`, user: `${my_user}`, password: `${my_password}`, database:"nightjs"});

    //db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });

    //db.query("SELECT idServer as 'id_server', name as 'name', nbMembers as 'nb_members', idOwner as 'id_owner', joinHour as 'join_hour' FROM Server;", function (err, result) {       if (err) throw err; result_db = result; console.log(result);});
    const requete = 'SELECT * FROM Server';
    const { rows: result } = await db.query(requete);
    console.log(result[0]);
    const message = ("**id du serveur: **"+result[0].idServer+"\n**nom du serveur:** "+result[0].name+"\n**Nombre de membres:** "+result[0].nbMembers+"\n**id du créateur:** "+result[0].idOwner+"\n**Date d'arrivée du bot:** "+result[0].joinHour);
    await interaction.reply(message);


    //console.log(result_db.id_data);
};