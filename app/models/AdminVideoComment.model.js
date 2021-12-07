module.exports = (sequelize, DataTypes) => {
  const AdminVideoComment = sequelize.define("admin_video_comments", {
  comment_id: {
      type: DataTypes.STRING
    },
  comment_description: {
      type: DataTypes.STRING
    }
  });

  return AdminVideoComment;
};