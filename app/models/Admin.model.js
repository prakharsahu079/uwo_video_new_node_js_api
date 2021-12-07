module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("admin", {
    admin_id: {
        type: DataTypes.STRING
      },
    admin_email: {
        type: DataTypes.STRING
      },

    admin_pass:{
        type:DataTypes.STRING
    },
    admin_login_type:{
        type:DataTypes.STRING
    }
    });
  
    return Admin;
  };
  