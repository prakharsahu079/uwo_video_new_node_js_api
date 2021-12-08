const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./Admin.model")(sequelize, Sequelize);
db.adminVideoComment = require("./AdminVideoComment.model")(sequelize, Sequelize);
db.banners = require("./Banners.model")(sequelize, Sequelize);
db.blockedUser = require("./BlockedUser.model")(sequelize, Sequelize);
db.deviceModel = require("./DeviceModel.model")(sequelize, Sequelize);
db.discoverSection = require("./DiscoverSections.model")(sequelize, Sequelize);
db.favSound = require("./FavSounds.model")(sequelize, Sequelize);
db.followUser = require("./FollowUser.model")(sequelize, Sequelize);
db.gamesUrl = require("./GamesUrl.model")(sequelize, Sequelize);
db.hastag = require("./Hastag.model")(sequelize, Sequelize);
db.hastagFavourite = require("./HastagFavourite.model")(sequelize, Sequelize);
db.hastagSuggest = require("./HastagSuggest.model")(sequelize, Sequelize);
db.hastagVideo = require("./HastagVideo.model")(sequelize, Sequelize);
db.languge = require("./Languge.model")(sequelize, Sequelize);
db.notification = require("./Notification.model")(sequelize, Sequelize);
db.otherSignupInfo = require("./OtherSignupInfo.model")(sequelize, Sequelize);
db.paymentDetail = require("./PaymentDetail.model")(sequelize, Sequelize);
db.popularCreator = require("./PopularCreator.model")(sequelize, Sequelize);
db.reportedUser = require("./ReportedUsers.model")(sequelize, Sequelize);
db.reportedVideo = require("./ReportedVideo.model")(sequelize, Sequelize);
db.reportReason = require("./ReportReason.model")(sequelize, Sequelize);
db.sound = require("./Sound.model")(sequelize, Sequelize);
db.states = require("./States.model")(sequelize, Sequelize);
db.userInfo = require("./UserInfo.model")(sequelize, Sequelize);
db.userSigup = require("./UserSignup.model")(sequelize, Sequelize);
db.userVideo = require("./UserVideo.model")(sequelize, Sequelize);
db.userWatchedVideo = require("./UserWatchedVideo.model")(sequelize, Sequelize);
db.verifiedUser = require("./VerifiedUser.model")(sequelize, Sequelize);
db.version = require("./Version.model")(sequelize, Sequelize);
db.videoCatagory = require("./VideoCatagory.model")(sequelize, Sequelize);
db.videoComment = require("./VideoComment.model")(sequelize, Sequelize);
db.videoInfo = require("./VideoInfo.model")(sequelize, Sequelize);
db.videoLikeDislike = require("./VideoLikeDislike.model")(sequelize, Sequelize);
db.videoPrivacy = require("./VideoPrivacy.model")(sequelize, Sequelize);



module.exports = db;