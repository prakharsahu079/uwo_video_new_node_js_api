module.exports = (sequelize, DataTypes) => {
    const HastagVideo = sequelize.define("hastag_Video", {
    user_id: {
        type: DataTypes.STRING
      },
    hastag_id: {
        type: DataTypes.STRING
      },

    video_id:{
        type:DataTypes.STRING
    }
    });
  
    return HastagVideo;
  };
  