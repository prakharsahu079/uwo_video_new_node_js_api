module.exports = (sequelize, DataTypes) => {
    const Sound = sequelize.define("sound", {
    user_id: {
        type: DataTypes.STRING
      },
    sound_id: {
        type: DataTypes.STRING
      },
    sound_name: {
        type: DataTypes.STRING
      },
    sound_description: {
        type: DataTypes.STRING
      },
    sound_url: {
        type: DataTypes.STRING
      },
    sound_artist: {
        type: DataTypes.STRING
      }
    ,
    sound_upload_user_name: {
        type: DataTypes.STRING
      },
    active_status: {
        type: DataTypes.boolean
      },
    sub_admin:{
        type:DataTypes.STRING
    }
    });
  
    return Sound;
  };
  