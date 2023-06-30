import mysql from "mysql";

// export const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "adm_equipamentos"
// })

export const connection = mysql.createPool({
    connectionLimit : 100,
    // host: "ns104.hostgator.com.br",
    host: "br104.hostgator.com.br",
    user: "pitter45_robson",
    password: "Pitter1992",
    port: 3306,
    database: "pitter45_tecmed",
    multipleStatements: true
})

// export const connection = mysql.createPool({
//     connectionLimit : 100,
//     host: "localhost",
//     user: "root",
//     password: "root",
//     port: 3306,
//     database: "adm_equipamentos",
//     multipleStatements: true
// })