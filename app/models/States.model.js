module.exports = (sequelize, DataTypes) => {
    const States = sequelize.define("states", {
    state_id: {
        type: DataTypes.STRING
      },
    state_name: {
        type: DataTypes.STRING
      },
    country_id:{
        type:DataTypes.STRING
    },
    
    });
  
    return States;
  };
  