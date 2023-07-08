module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      mechanicId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER
    },
    {}
  );
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Mechanic);
    Appointment.belongsTo(models.Customer);
  };
  return Appointment;
};