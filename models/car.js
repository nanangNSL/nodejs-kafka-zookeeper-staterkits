module.exports = (sequelize, Sequelize) => {

    const Car = sequelize.define("t_car", {
      carID : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      car_name : {
        type : Sequelize.STRING
      },
      car_image : {
        type : Sequelize.STRING
      },
      type : {
        type : Sequelize.STRING
      },
      brand : {
        type: Sequelize.STRING
      },
      made_in : {
        type : Sequelize.STRING
      },
      made_years : {
        type : Sequelize.FLOAT
      },
      history_driver : {
        type : Sequelize.ARRAY( Sequelize.STRING )
      },
      history_maintenace : {
        type : Sequelize.ARRAY( Sequelize.STRING )
      },
      inventaris : {
        type : Sequelize.BOOLEAN
      },
      inventaris_time : {
        type : Sequelize.DATE
      },
      is_vendor : {
        type : Sequelize.STRING
      },
      is_deleted : {
        type : Sequelize.BOOLEAN,
            defaultValue : false
    }
    });
  
    return Car;
  };