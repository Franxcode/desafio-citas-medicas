const express = require("express");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const colors = require("colors");
const _ = require("lodash");
const { api } = require("./axios");
const app = express();

const port = 3000;

const main = async () => {
	const users = await api();
	_.forEach(users, (value) => {
		console.log(`Nombre: ${value.name} - Apellido: ${value.last} - ID: ${uuidv4()} - Timestamp: ${moment().format("MMMM Do YYYY, h:mm:ss a")}`.bgWhite.blue);
	});

	app.get("/", (req, res) => {
		res.send(_.map(users, (value, index) => `<ol>${index + 1}. Nombre: ${value.name} - Apellido: ${value.last} - ID: ${value.id} - Timestamp: ${value.timestamp}</ol>`).join(""));
	});

	app.listen(port, () => {
		console.log(`Server up and listening at http://localhost:${port}`);
	});
};

main();
