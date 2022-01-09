const axios = require("axios").default;

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

		const resp = await instance.get();

		return resp.data.results.map((user) => ({
			name: user.name.first,
			last: user.name.last,
		}));
	} catch (error) {
		console.log(error);
	}
}
module.exports = {
	api,
};
