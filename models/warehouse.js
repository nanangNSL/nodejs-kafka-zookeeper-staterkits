module.exports = (sequelize, Sequelize) => {

    const Warehouse = sequelize.define("t_warehouse", {
        warehouseID : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name : {
            type : Sequelize.STRING
        },
        image : {
            type : Sequelize.STRING
        },
        container_sender : {
            type : Sequelize.ARRAY( Sequelize.STRING )
        },
        operator : {
            type : Sequelize.STRING
        },
        temperatur : {
            type : Sequelize.STRING
        },
        capacity : {
            type: Sequelize.STRING
        },
        capacity_type : {
            type :  Sequelize.STRING
        },
        address : {
            type : Sequelize.STRING
        },
        phonenumber : {
            type : Sequelize.FLOAT
        },
        locationID : {
            type : Sequelize.UUID
        },
        parked_mobile : {
            type : Sequelize.ARRAY( Sequelize.STRING )
        },
        is_deleted : {
            type : Sequelize.BOOLEAN,
            defaultValue : false
        }
    });
  
    return Warehouse;
  };