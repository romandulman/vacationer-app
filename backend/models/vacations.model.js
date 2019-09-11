'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vacations = sequelize.define('Vacations', {
    description: DataTypes.STRING,
    destination: DataTypes.STRING,
    image: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    price: DataTypes.DOUBLE,
    followerscount: DataTypes.INTEGER
  }, {});
  Vacations.associate = function(models) {
    // associations can be defined here
  };
  return Vacations;
};
