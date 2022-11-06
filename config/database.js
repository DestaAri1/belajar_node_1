const sq = require('sequelize');

const { Sequelize } = sq

const conn = new Sequelize('mine', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

try {
    conn.authenticate();
    console.log("Database Berhasil Konek")
} catch (error) {
    console.log(error)
}

module.exports =  conn;