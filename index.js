import express from "express";
import appRoutes from "./routes/rotas.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use("/", appRoutes);

// app.listen(8800);
app.listen(8800);

// var app = require('express')();
// var http = require('http').Server(app);
// var mysql = require('mysql');
// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var mysql_pool  = mysql.createPool({
//   connectionLimit : 100,
//   host            : 'ns104.hostgator.com.br',
//   user            : 'pitter45_robson',
//   password        : 'Pitter1992',
//   database        : 'equipamentos'
// });

// app.get('/api/database/status',function(req,res) {
// 	console.log('API CALL: /api/database/status');
// 	var retvalSettingValue = "?";
// 	mysql_pool.getConnection(function(err, connection) {
// 		if (err) {
// 			connection.release();
// 	  		console.log(' Error getting mysql_pool connection: ' + err);
// 	  		throw err;
// 	  	}
// 	    connection.query('SELECT SettingValue FROM your_database_table WHERE SettingKey =\'DatabaseStatus\'', function(err2, rows, fields) {	
// 	    	if (err2) {
// 				var data = { "Time":"", "DatabaseStatus":"" };
// 				data["Time"] = (new Date()).getTime();
// 				data["DatabaseStatus"] = "Down";
// 				res.json(data); 
// 			} else {
// 				var dbretval = rows[0].SettingValue;
// 				if (dbretval == 1 ) {
// 					var data = { "Time":"", "DatabaseStatus":"" };
// 					data["Time"] = (new Date()).getTime();
// 					data["DatabaseStatus"] = "Up";
// 					res.json(data); 
// 				} else {
// 					var data = { "Time":"", "DatabaseStatus":"" };
// 					data["Time"] = (new Date()).getTime();
// 					data["DatabaseStatus"] = "Down";
// 					res.json(data); 
// 				}
// 			}
// 			console.log(' mysql_pool.release()');
// 			connection.release();
// 	    });
// 	});
// });

// http.listen(3000,function(){
// 	console.log("Connected & Listen to port 3000 at /api ..");
// });