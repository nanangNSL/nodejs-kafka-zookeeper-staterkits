const Sequelize = require('sequelize');
require('dotenv').config()

// Define Sequelize connection parameters based on environment
const sequelizeConfig = process.env.NODE_ENV === 'prod' ? {
    dialect: process.env.DB,
    host: process.env.DB_PRO_HOST,
    port: process.env.DB_PRO_PORT,
    username: process.env.DB_PRO_USERNAME,
    password: process.env.DB_PRO_PASSWORD,
    database: process.env.DB_PRO_NAME
  } : {
    
    dialect: process.env.DB,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT,
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME
  };
  
  // Create Sequelize instance
  const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
    host: sequelizeConfig.host,
    port: sequelizeConfig.port,
    dialect: sequelizeConfig.dialect,
    logging : false,
  });
  
    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    db.Users = require("./user")(sequelize, Sequelize);
    db.AgenHub = require("./agen.hub")(sequelize, Sequelize);
    db.Booking = require("./booking")(sequelize, Sequelize);
    db.Car = require("./car")(sequelize, Sequelize);
    db.Driver = require("./driver")(sequelize, Sequelize);
    db.Feedback = require("./feedback")(sequelize, Sequelize);
    db.Location = require("./location")(sequelize, Sequelize);
    db.Pay = require("./pay")(sequelize, Sequelize);
    db.Warehouse = require("./warehouse")(sequelize, Sequelize);
    db.Role = require("./role")(sequelize, Sequelize);
    db.Invoice = require("./invoice")(sequelize, Sequelize);
    db.CategoryPKG = require("./category.pkg")(sequelize, Sequelize);
    db.Maintaince = require("./maintenance")(sequelize, Sequelize);
    db.Company = require("./company")(sequelize, Sequelize);
    db.Vendor = require("./vendor")(sequelize, Sequelize);
    
    module.exports = db;