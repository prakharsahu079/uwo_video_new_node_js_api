module.exports = (sequelize, DataTypes) => {
    const ReportReason = sequelize.define("report_reason", {
    report_reason_id: {
        type: DataTypes.INTEGER
      },
    report_tittle : {
        type: DataTypes.STRING
      },
    
    });
  
    return ReportReason;
  };
  