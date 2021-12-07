module.exports = (sequelize, DataTypes) => {
    const FollowUser = sequelize.define("follow_user", {
    user_id: {
        type: DataTypes.STRING
      },
    followed_user_user_id: {
        type: DataTypes.STRING
      }
    });
  
    return FollowUser;
  };
  