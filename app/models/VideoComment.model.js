module.exports = (sequelize, DataTypes) => {
    const VideoComment = sequelize.define("video_comment", {
    video_id: {
        type: DataTypes.STRING
      },
    comment_id: {
        type: DataTypes.STRING
      },
    user_id: {
        type: DataTypes.STRING
      },
    comment_description: {
        type: DataTypes.STRING
      }
    });
  
    return VideoComment;
  };
  