const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
	const garem = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(password, garem);
};

const verifyPassword = (password, hash) => {
	return bcrypt.compareSync(password, hash);
};

module.exports = { hashPassword, verifyPassword };
