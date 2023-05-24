module.exports = (sequelize, Sequelize) => {

  const Users = sequelize.define("t_users", {
    userID : {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    full_name : {
      type :  Sequelize.STRING
    },
    sebutan_gelar :{
      type :  Sequelize.STRING
    },
    foto_profile : {
      type : Sequelize.STRING,
      allowNull : true,
    },
    email: {
      type : Sequelize.STRING,
      allowNull : false
    },
    phonenumber : {
      type: Sequelize.STRING
    },
    password : {
      type : Sequelize.TEXT
    },
    refresh_token : {
      type : Sequelize.TEXT
    },
    forgot_pass : {
      type : Sequelize.FLOAT
    },
    role : {
      type : Sequelize.FLOAT
    }
  });

  return Users;
};