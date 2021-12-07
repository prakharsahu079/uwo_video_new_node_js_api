module.exports = (sequelize, DataTypes) => {
    const UserWatchedVideo = sequelize.define("user_watched_video", {
    user_id: {
        type: DataTypes.STRING
      },
    video_id: {
        type: DataTypes.STRING
      },
    watch_Time: {
        type: DataTypes.STRING
      }

    });
  
    return UserWatchedVideo;
  };
  