module.exports = (sequelize, DataTypes) => {
    const VerifiedUser = sequelize.define("verified_user", {
      user_id: {
        type: DataTypes.STRING
      },
     verification_info: {
        type: DataTypes.TINYINT
      }
    });
  
    return VerifiedUser;
  };
  