module.exports = (sequelize, Sequelize) => {
  const Pay = sequelize.define("t_pay", {
    payID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    bookingID: {
      type: Sequelize.STRING,
    },
    method_pay: {
      type: Sequelize.STRING,
    },
    total_pay :{
        type: Sequelize.STRING
    },
    curency :{
        type : Sequelize.STRING
    },
    code_pay : {
        type : Sequelize.STRING
    },
    billing_address : {
        type : Sequelize.STRING
    },
    ID_transaction : {
        type : Sequelize.STRING
    },
    status_pay : {
        type : Sequelize.STRING
    },
    tax: {
        type : Sequelize.STRING
    },
    disc : {
        type : Sequelize.STRING
    },
    insurance : {
        type : Sequelize.STRING
    },
    noted_pay : {
        type : Sequelize.STRING
    }
  });

  return Pay;
};
