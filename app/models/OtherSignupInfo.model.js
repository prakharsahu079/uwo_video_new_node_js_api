module.exports = (sequelize, DataTypes) => {
    const OtherSignupInfo = sequelize.define("other_signup_info", {
      user_id: {
        type: DataTypes.STRING
      },
      version: {
        type: DataTypes.STRING
      },
     city: {
        type: DataTypes.STRING
      },
      lat: {
        type: DataTypes.STRING
      },
      lang: {
        type: DataTypes.STRING
      },
      praffared_Lang: {
        type: DataTypes.STRING
      }
    });
  
    return OtherSignupInfo;
  };
  