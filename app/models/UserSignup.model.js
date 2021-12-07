module.exports = (sequelize, DataTypes) => {
    const UserSignup = sequelize.define("user_signup", {
      user_id: {
        type: DataTypes.STRING
      },
      sign_up_type: {
        type: DataTypes.STRING
      },
     token: {
        type: DataTypes.STRING
      },
     device_id: {
        type: DataTypes.STRING
      },
     device: {
        type: DataTypes.STRING
      }
    });
  
    return UserSignup;
  };
  