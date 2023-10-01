const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Contact extends Model {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      maxLength: 300,
    },
  },
  {
    sequelize, //Pass my connection instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "contact",
  }
);

module.exports = Contact;
