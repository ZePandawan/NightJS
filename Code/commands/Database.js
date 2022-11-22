const mysql = require("mysql");

 class Database {
    constructor (hostname, username, userpass, dbname) {
        this.connection = mysql.createConnection({
            host: hostname,
            user: username,
            password: userpass,
            database: dbname
        })
    }

    connect () {
        return new Promise((resolve, reject) => {
            this.connection.connect((errors) => {
                if (errors) {
                    reject(errors)
                    return null
                }

                resolve(this)
            })
        })
    }

    query (statement, params) {
        return new Promise((resolve, reject) => {
            this.connection.query(statement, params, (errors, rows, fields) => {
                if (errors) {
                    reject(errors)
                    return null
                }

                resolve({
                    rows,
                    fields
                })
            })
        })
    }
}

module.exports = Database;