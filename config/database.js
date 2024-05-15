const {
	db: { username, password, database, host },
} = require("./index");

module.exports = {
	development: {
		username: 'utterlyapp',
		password: 'Asians4life',
		database: 'utterly',
		host,
		dialect: "postgres",
		seederStorage: "sequelize",
	},
	production: {
		use_env_variable: "DATABASE_URL",
		dialect: "postgres",
		seederStorage: "sequelize",
	},
};
