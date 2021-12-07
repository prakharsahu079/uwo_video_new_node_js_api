module.exports = (sequelize, DataTypes) => {
    const VideoLikeDislike = sequelize.define("video_like_dislike", {
    video_id: {
        type: DataTypes.STRING
      },
    user_id: {
        type: DataTypes.STRING
      },
    action: {
        type: DataTypes.STRING
      }
    });
  
    return VideoLikeDislike;
  };
  