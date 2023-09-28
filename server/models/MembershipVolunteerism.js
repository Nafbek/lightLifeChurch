const { Model, DataTypes } = require("sequelize");

class membershipVolunteerism extends Model {}

membershipVolunteerism.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "membershipVolunteerism",
  }
);
