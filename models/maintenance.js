module.exports = (sequelize, Sequelize) => {

    const Maintenance = sequelize.define("t_maintenance", {
      maintenanceID : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      no_vechicle : {
        type : Sequelize.STRING
      },
      date_last_maintenance :{
        type : Sequelize.STRING,
      },
      KM_last : {
        type : Sequelize.STRING
      },
      category : {
        type : Sequelize.STRING
      },
      description : {
        type : Sequelize.STRING
      },
      noted_services : {
        type : Sequelize.STRING
      },
      price : {
        type : Sequelize.STRING
      },
      next_maintenance_schedule : {
        type : Sequelize.STRING
      }
    });
  
    return Maintenance;
  };