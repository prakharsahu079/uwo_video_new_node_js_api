module.exports = (sequelize, DataTypes) => {
    const PaymentDetail = sequelize.define("paymeny_detail", {
    user_id:{
      type:DataTypes.STRING
    },
    payment_id: {
        type: DataTypes.STRING
      },
    orderd_id: {
        type: DataTypes.TINYINT
      },

    payment_date:{
      type:DataTypes.STRING
    },
    payment_method:{
      type:DataTypes.STRING
    },
    Payment_description:{
      type:DataTypes.STRING
    },
    Payment_status:{
      type:DataTypes.STRING
    }
    });
  
    return PaymentDetail;
  };
  