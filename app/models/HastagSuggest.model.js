module.exports = (sequelize, DataTypes) => {
    const HastagSuggest = sequelize.define("hastag_Suggest", {
    hastag_suggest_id: {
        type: DataTypes.STRING
      },
    hastag_name: {
        type: DataTypes.TINYINT
      },

    hastag_suggest_status:{
        type:DataTypes.STRING
    },

    hastag_suggest_rank:{
        type: DataTypes.INTEGER
    }
    });
  
    return HastagSuggest;
  };
  