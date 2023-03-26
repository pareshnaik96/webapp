const mysql = require("mysql2")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "webapp"
})
con.connect((err) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("mysql is connected")
    }
})


module.exports = con