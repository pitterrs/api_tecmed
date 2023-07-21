import mysql from "mysql";

export const connection = mysql.createPool({
    connectionLimit : 100,
    host: "192.185.221.174",
    user: "tecmed48_robson",
    password: "PACLgXDAKDan",
    port: 3306,
    database: "tecmed48_tecmed",
    multipleStatements: true,
    timezone: 'BRT'
})