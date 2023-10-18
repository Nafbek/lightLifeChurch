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
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
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
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    volunteerismArea: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("volunteerismArea").toUpperCase().trim();
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

module.exports = MembershipVolunteerism;
