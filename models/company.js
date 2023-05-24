module.exports = (sequelize, Sequelize) => {

    const Company = sequelize.define("t_company", {
        companyID : {
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
        }
        
    });
  
    return Company;
  };