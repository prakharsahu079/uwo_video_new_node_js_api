module.exports = (sequelize, DataTypes) => {
    const VideoInfo = sequelize.define("video_info", {
    video_id: {
        type: DataTypes.STRING
      },
    description: {
        type: DataTypes.STRING
      },
    video_view_count: {
        type: DataTypes.NUMBER
      },
    like_count: {
        type: DataTypes.NUMBER
      },
    sub_admin: {
        type: DataTypes.STRING
      },
    share_count: {
        type: DataTypes.NUMBER
      },
    catagory: {
        type: DataTypes.STRING
      },
    language: {
        type: DataTypes.STRING
      }

    });
  
    return VideoInfo;
  };
  