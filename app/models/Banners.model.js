module.exports = (sequelize, DataTypes) => {
    const Banners = sequelize.define("banners", {
    banner_id: {
        type: DataTypes.STRING
      },
    banner_image_url: {
        type: DataTypes.STRING
      },
    banner_image_click_url:{
        type:DataTypes.STRING
    },
    banner_active_status:{
        type:DataTypes.BOOLEAN
    }
    });
  
    return Banners;
  };
  