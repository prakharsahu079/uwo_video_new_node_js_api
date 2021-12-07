module.exports = (sequelize, DataTypes) => {
    const HastagFavourite = sequelize.define("hastag_favourite", {
    user_id: {
        type: DataTypes.STRING
      },
    hastag_id: {
        type: DataTypes.STRING
      }
    });
  
    return HastagFavourite;
  };
  