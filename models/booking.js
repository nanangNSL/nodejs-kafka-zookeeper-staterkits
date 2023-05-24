module.exports = (sequelize, Sequelize) => {

    const Booking = sequelize.define("t_booking", {
        bookingID : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        image : {
            type : Sequelize.STRING
        },
        type : {
            type :  Sequelize.STRING
        },
        isAgen : {
            type :  Sequelize.BOOLEAN
        },
        category : {
            type :  Sequelize.STRING,
        },
        d_wide : {
            type :  Sequelize.STRING
        },
        d_width : {
            type : Sequelize.STRING
        },
        d_hight : {
            type : Sequelize.STRING
        },
        weight : {
            type : Sequelize.STRING
        },
        sender  : {
            type :  Sequelize.STRING
        },
        no_sender : {
            type : Sequelize.STRING
        },
        address_sender : {
            type : Sequelize.STRING
        },
        consigne  :{
            type : Sequelize.STRING
        },
        no_consigne : {
            type :  Sequelize.STRING
        },
        address_consigne : {
            type : Sequelize.STRING
        },
        item_value : {
            type :  Sequelize.STRING
        },
        price : {
            type :  Sequelize.STRING
        },
        time_estimation : {
            type : Sequelize.STRING
        },
        noted : {
            type : Sequelize.STRING
        },
        is_deleted : {
            type : Sequelize.BOOLEAN,
            defaultValue : false
        }
    });
  
    return Booking;
  };