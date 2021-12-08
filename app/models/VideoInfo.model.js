module.exports = (sequelize, DataTypes) => {
    const VideoInfo = sequelize.define("video_info", {
    video_id: {
        type: DataTypes.STRING
      },
    description: {
        type: DataTypes.STRING
      },
    video_view_count: {
        type: DataTypes.INTEGER
      },
    like_count: {
        type: DataTypes.INTEGER
      },
    sub_admin: {
        type: DataTypes.STRING
      },
    share_count: {
        type: DataTypes.INTEGER
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
  