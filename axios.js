const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

async function api() {
	try {
		const instance = axios.create({
			baseURL: `https://randomuser.me/api/`,
			params: {
				results: 7,
				nat: "gb",
				inc: "name",
			},
		});
		// ID: ${uuidv4()} - Timestamp: ${moment().format("MMMM Do YYYY, h:mm:ss a")
		const resp = await instance.get();

		return resp.data.results.map((user) => ({
			name: user.name.first,
			last: user.name.last,
			id: uuidv4(),
			timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
		}));
	} catch (error) {
		console.log(error);
	}
}
module.exports = {
	api,
};
