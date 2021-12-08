module.exports = (sequelize, DataTypes) => {
    const VideoCatagory = sequelize.define("catagory", {
    catagory_id: {
        type: DataTypes.STRING
      },
    catagory_name: {
        type: DataTypes.STRING
      },

    catagory_pic:{
        type:DataTypes.STRING
    },
    catagory_Status:{
        type:DataTypes.TINYINT
    },
    catagory_Proirty:{
        type:DataTypes.INTEGER
    }
    });
  
    return VideoCatagory;
  };