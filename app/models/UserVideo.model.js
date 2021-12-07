module.exports = (sequelize, DataTypes) => {
    const UserVideo = sequelize.define("user_video", {
    user_id: {
        type: DataTypes.STRING
      },
    video_id: {
        type: DataTypes.STRING
      },
    video: {
        type: DataTypes.STRING
      },
    thum: {
        type: DataTypes.STRING
      },
    gif: {
        type: DataTypes.STRING
      },
    sound_id: {
        type: DataTypes.STRING
      }

    });
  
    return UserVideo;
  };
  