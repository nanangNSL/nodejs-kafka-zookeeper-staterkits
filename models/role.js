module.exports = (sequelize, Sequelize) => {

    const Role = sequelize.define("t_role", {
        roleID : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name : {
            type : Sequelize.STRING,
            unique: true
        },
        is_deleted : {
            type : Sequelize.BOOLEAN,
            defaultValue : false
        }
    });
  
    return Role;
  };