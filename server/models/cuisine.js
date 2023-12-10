"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cuisine extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.User, { foreignKey: "AuthorId" });
			this.belongsTo(models.Cateogry, { foreignKey: "CategoryId" });
		}
	}
	Cuisine.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: true,
				},
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: true,
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: true,
				},
			},
			imgUrl: {
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
			modelName: "Cuisine",
		}
	);
	return Cuisine;
};
