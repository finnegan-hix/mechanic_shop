module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define(
      "Customer",
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.Integer,
      },
      {}
    );
    Customer.associate = function(models) {
      Customer.belongsToMany(models.Mechanic, { through: "Appointment", foreignKey: "customerId" });
    };
    return Customer;
  };