const db = require("../db/db");
const { DataTypes } = require("sequelize");

// Synchronize the database.
// The `force: false` option means that it will not drop and true option it will drop
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// Define models and associate them with the Sequelize instance
// 'db.user' and 'db.report' now represent Sequelize models
db.user = require("../models/users/user")(db.sequelize, DataTypes);
db.cart = require("../models/cart/cart")(db.sequelize, DataTypes);

// db.post.hasMany(db.comment, { foreignkey: "post_Id" });
// db.comment.belongsTo(db.post, { foreignkey: "post_Id" });

// db.user.hasMany(db.adminNotification, { foreignkey: "Id" });
// db.adminNotification.belongsTo(db.user, { foreignkey: "Id" });

module.exports = db;
