module.exports = (sequelize, DataTypes) => {
    const BlockedUser = sequelize.define("blocked_user", {
      user_id: {
        type: DataTypes.STRING
      },
      blocked_status: {
        type: DataTypes.TINYINT
      }
    });
  
    return BlockedUser;
  };
  