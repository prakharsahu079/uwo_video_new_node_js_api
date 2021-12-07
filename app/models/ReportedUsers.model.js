module.exports = (sequelize, DataTypes) => {
    const ReportedVideo = sequelize.define("reported_video", {
    video_id: {
        type: DataTypes.STRING
      },
    report_by_user_id: {
        type: DataTypes.STRING
      },
    reported_video_id: {
        type: DataTypes.STRING
      },

    reported_video_user_id:{
        type: DataTypes.STRING
    },
    report_reason_id:{
        type: DataTypes.STRING
    },
    other_reason:{
        type:DataTypes.STRING
    }
    });
  
    return ReportedVideo;
  };
  