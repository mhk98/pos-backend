module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    "cart",
    {
      Cart_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return cart;
};
