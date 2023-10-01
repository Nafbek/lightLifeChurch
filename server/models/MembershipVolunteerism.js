const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MembershipVolunteerism extends Model {}

MembershipVolunteerism.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    purpose: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.CHAR,
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
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    volunteerismArea: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        this.getDataValue("volunteerismArea").toUpperCase().trim();
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "membershipVolunteerism",
  }
);
