import mysql from "mysql";

// export const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "adm_equipamentos"
// })

export const connection = mysql.createPool({
    connectionLimit : 100,
    // host: "br104.hostgator.com.br",
    // host: "192.185.210.220",
    host: "192.185.221.174",
    // user: "pitter45_robson",
    user: "tecmed48_robson",
    // password: "oAm2FUQGHdG8W",
    password: "PACLgXDAKDan",
    port: 3306,
    // database: "pitter45_tecmed",
    database: "tecmed48_tecmed",
    multipleStatements: true,
    timezone: 'BRT'
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