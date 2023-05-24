module.exports = (sequelize, Sequelize) => {

    const Category_pkg = sequelize.define("t_category", {
      categoryID : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name : {
        type: Sequelize.STRING
      },
      description : {
        type: Sequelize.STRING
      }
    });
  
    return Category_pkg;
  };