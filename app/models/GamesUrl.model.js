module.exports = (sequelize, DataTypes) => {
    const GamesUrl = sequelize.define("games_url", {
    game_id: {
        type: DataTypes.STRING
      },
    game_name: {
        type: DataTypes.STRING
      },

    game_image:{
        type:DataTypes.STRING
    },
    game_url:{
        type:DataTypes.STRING
    },
    game_banner_flag:{
        type:DataTypes.boolean
    }
    });
  
    return GamesUrl;
  };
  