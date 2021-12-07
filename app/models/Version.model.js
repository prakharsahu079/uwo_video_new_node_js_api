module.exports = (sequelize, DataTypes) => {
    const Version = sequelize.define("version", {
    version_id: {
        type: DataTypes.STRING
      },
    version_name: {
        type: DataTypes.STRING
      },

    });
  
    return Version;
  };
  