module.exports = (sequelize, DataTypes) => {
    const PopularCreator = sequelize.define("popular_creator", {
    user_id: {
        type: DataTypes.STRING
      },
    rank: {
        type: DataTypes.NUMBER
      }
    });
  
    return PopularCreator;
  };
  