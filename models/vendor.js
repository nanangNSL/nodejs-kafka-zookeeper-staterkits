module.exports = (sequelize, Sequelize) => {

    const Vendor = sequelize.define("t_vendor", {
        vendorID : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        company_name : {
            type: Sequelize.STRING
        },
        address : {
            type : Sequelize.STRING,
        },
        locality : {
            type : Sequelize.STRING
        },
        city : {
            type : Sequelize.STRING
        },
        province : {
            type : Sequelize.STRING
        },
        postal_code : {
            type : Sequelize.STRING
        },
        phonenumber : {
            type : Sequelize.STRING
        },
        email :{
            type : Sequelize.STRING
        },
        platform : {
            type : Sequelize.STRING
        },
        link_website : {
            type : Sequelize.STRING
        },
        vendor_api_key : {
            type : Sequelize.STRING
        },
        owner : {
            type : Sequelize.STRING
        },
        phonenumber_owner : {
            type : Sequelize.STRING
        },
        email_owner : {
            type : Sequelize.STRING
        },
        npwp_company : {
            type : Sequelize.STRING
        },

        
    });
  
    return Vendor;
  };