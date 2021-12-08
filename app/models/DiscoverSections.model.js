module.exports = (sequelize, DataTypes) => {
    const DiscoverSections = sequelize.define("discover_section", {
    section_id: {
        type: DataTypes.STRING
      },
    section_name: {
        type: DataTypes.STRING
      },

    section_pic:{
        type:DataTypes.STRING
    },
    active:{
        type:DataTypes.TINYINT
    },
    proirty:{
        type:DataTypes.INTEGER
    }
    });
  
    return DiscoverSections;
  };
  