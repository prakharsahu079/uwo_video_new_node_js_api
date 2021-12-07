module.exports = (sequelize, DataTypes) => {
    const Languge = sequelize.define("languge", {
    languge_id: {
        type: DataTypes.STRING
      },
    languge_name: {
        type: DataTypes.STRING
      },

    languge_logo:{
        type:DataTypes.STRING
    }
    });
  
    return Languge;
  };
  