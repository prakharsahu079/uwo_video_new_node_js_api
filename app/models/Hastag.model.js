module.exports = (sequelize, DataTypes) => {
    const Hastag = sequelize.define("hastag", {
    hastag_name: {
        type: DataTypes.STRING
      },
    hastag_id: {
        type: DataTypes.STRING
      }
    });
  
    return Hastag;
  };
  