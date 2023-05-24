module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("t_invoice", {
    invoiceID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    category_service : {
        type: Sequelize.STRING
    },
    bookingID : {
        type: Sequelize.STRING
    },
    company_logo :{
        type: Sequelize.STRING
    },
    vendor_logo : {
        type: Sequelize.STRING
    },
    pelangganID : {
        type : Sequelize.STRING
    },
    name_agenHub_created : {
        type : Sequelize.STRING
    },
    sender : {
        type : Sequelize.STRING
    },
    address_sender : {
        type : Sequelize.STRING
    },
    phone_sender : {
        type : Sequelize.STRING
    },
    noted_sender: {
        type : Sequelize.STRING
    },
    consigne : {
        type :  Sequelize.STRING
    },
    address_consigne : {
        type : Sequelize.STRING
    },
    phone_consigne : {
        type : Sequelize.STRING
    },
    method_pay : {
        type : Sequelize.STRING
    },
    weight : {
        type : Sequelize.STRING
    },
    d_wide : {
        type : Sequelize.STRING
    },
    d_width : {
        type : Sequelize.STRING
    },
    d_hight : {
        type  : Sequelize.STRING
    },
    tax : {
        type : Sequelize.STRING
    },
    disc : {
        type : Sequelize.STRING
    },
    price : {
        type : Sequelize.STRING
    },
    item_value : {
        type : Sequelize.STRING
    },
    insurance : {
        type : Sequelize.STRING
    },
    history : {
        type : Sequelize.ARRAY( Sequelize.STRING)
    }

  });

  return Invoice;
};
