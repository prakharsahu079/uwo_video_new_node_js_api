module.exports = (sequelize, DataTypes) => {
    const DeviceModel = sequelize.define("device_model", {
    user_id: {
        type: DataTypes.STRING
      },
    token: {
        type: DataTypes.STRING
      },

    phone_id:{
        type:DataTypes.STRING
    }
    });
  
    return DeviceModel;
  };
  