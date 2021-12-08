module.exports = (sequelize, DataTypes) => {
    const ReportedUsers = sequelize.define("reported_user", {
    user_id: {
        type: DataTypes.STRING
      },
    report_id: {
        type: DataTypes.INTEGER
      },
    report_reason_tittle: {
        type: DataTypes.STRING
      },

    reported_reason_id:{
        type: DataTypes.STRING
    },
    report_reason_id:{
        type: DataTypes.STRING
    }
    });
  
    return ReportedUsers;
  };
  