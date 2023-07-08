module.exports = (sequelize, DataTypes) => {
    const Mechanic = sequelize.define(
      "Mechanic",
      {
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        doh: DataTypes.Date,
      },
      {}
    );
    Mechanic.associate = function(models) {
      Mechanic.belongsToMany(models.Customer, { through: "Appointment", foreignKey: "mechanicId" });
    };
    return Mechanic;
  };