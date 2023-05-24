module.exports = (sequelize, Sequelize) => {

    const Driver = sequelize.define("t_driver", {
     driverID  :{
        type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
     },
     userID : {
        type: Sequelize.UUID,
     },
     no_license :{
        type : Sequelize.STRING
     },
     type_license : {
        type: Sequelize.STRING
     },
     name_mother :  {
        type : Sequelize.STRING
     },
     phone_family : {
        type : Sequelize.STRING
     },
     code_verify : {
        type : Sequelize.STRING
     },
     zone_service : {
        type : Sequelize.ARRAY( Sequelize.STRING )
     },
     is_deleted : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }

    });
  
    return Driver;
  };