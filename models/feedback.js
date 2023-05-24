module.exports = (sequelize, Sequelize) => {

    const Feedback = sequelize.define("t_feedback", {
        feedbackID : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        userID : {
            type: Sequelize.UUID,
        },
        driverID : {
            type : Sequelize.UUID
        },
        carID : {
            type :  Sequelize.UUID
        },
        bookingID : {
            type : Sequelize.UUID
        },
        description : {
            type :  Sequelize.STRING
        },
        is_deleted :{
            type : Sequelize.BOOLEAN,
            defaultValue : false
        }

    });
  
    return Feedback;
  };