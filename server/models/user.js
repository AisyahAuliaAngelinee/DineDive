"use strict";
const { hashPassword } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.Cuisine, { foreignKey: "AuthorId" });
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: true,
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
					notNull: true,
					notEmpty: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: true,
				},
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);

	//? Create customHooks for Hash Password
	//? Custom Hooks should put above model return
	/** Conditions terms:
	 * Create the random hash in with bcryptjs package (npm i bcryptjs)
	 * import the random hash
	 * password will be hash in customhooks before create the user account
	 */
	User.beforeCreate((data) => {
		data.password = hashPassword(data.password);
	});

	return User;
};
