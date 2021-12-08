module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define("notification", {
    user_id: {
        type: DataTypes.STRING
      },
    effected_user_id: {
        type: DataTypes.STRING
      },
    notification_id:{
        type:DataTypes.STRING
    },
    notification_type:{
        type:DataTypes.STRING
    },
    value:{
        type:DataTypes.STRING
    },
    read_Status:{
        type:DataTypes.TINYINT
    }
    });
  
    return Notification;
  };
  