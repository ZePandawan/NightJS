const {my_host, my_user, my_password} = require("../../Config/mysql.json");
const mysql = require("mysql"); 

exports.run = async (client, interaction) => {
    const db = mysql.createConnection({ host: "mysql-nightjs.alwaysdata.net", user: "nightjs", password: "toutnwar619", database:"nightjs_bot"});

    db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });

    db.query("SELECT ID_data as 'id_data', NAME as 'name', ID_USER as 'id_user', AGE as 'age' FROM data;", function (err, result) {       if (err) throw err;       console.log(result);});

};