module.exports = (sequelize, DataTypes) => {
    const VideoPrivacy = sequelize.define("video_privacy", {
    video_id: {
        type: DataTypes.STRING
      },
    privacy_Type: {
        type: DataTypes.STRING
      },
    allow_duet: {
        type: DataTypes.STRING
      },
    });
  
    return VideoPrivacy;
  };
  