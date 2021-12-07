module.exports = (sequelize, DataTypes) => {
    const FavSounds = sequelize.define("fav_sound", {
    user_id: {
        type: DataTypes.STRING
      },
    sound_id: {
        type: DataTypes.STRING
      }
    });
  
    return FavSounds;
  };
  