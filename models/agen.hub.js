module.exports = (sequelize, Sequelize) => {

    const AgenHub = sequelize.define("t_agen_hub", {
        agenID : {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        locationID : {
            type :  Sequelize.UUID
        },
        is_open : {
            type :  Sequelize.BOOLEAN
        },
        cart_sender : {
            type :  Sequelize.ARRAY( Sequelize.STRING )
        },
        is_site: {
            type :  Sequelize.BOOLEAN
        },
        is_deleted : {
            type : Sequelize.BOOLEAN,
            defaultValue : false
        }
    });
  
    return AgenHub;
  };