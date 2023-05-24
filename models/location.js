module.exports = (sequelize, Sequelize) => {

    const Location = sequelize.define("t_location", {
        locationID : {
            type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
        },
        address : {
            type : Sequelize.STRING
        },
        locality : {
            type : Sequelize.STRING
        },
        city :  {
            type :  Sequelize.STRING
        },
        province : {
            type : Sequelize.STRING
        },
        postal_code : {
            type : Sequelize.STRING
        },
        latitude : {
            type :  Sequelize.STRING
        },
        atitude : {
            type : Sequelize.STRING
        },
        is_deleted : {
            type : Sequelize.BOOLEAN,
            defaultValue : false
        }
    
    });
  
    return Location;
  };