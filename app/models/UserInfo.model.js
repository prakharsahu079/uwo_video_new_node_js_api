module.exports = (sequelize, DataTypes) => {
    const UserInfo = sequelize.define("user_info", {
      user_id: {
        type: DataTypes.STRING
      },
      full_name: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      bio: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      user_name: {
        type: DataTypes.STRING
      }
    });
  
    return UserInfo;
  };
  