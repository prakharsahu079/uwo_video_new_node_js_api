const express = require("express");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();
const {
  loginView,
  registerView,
} = require("../controllers/authController");
const { verifyToken } = require("../middlewares/authJwt");
const { sessionChecker } = require("../middlewares/authJwt");
const { showAllVideos } = require("../controllers/videos");
const { showMyAllVideos } = require("../controllers/videos");
const { my_private_video } = require("../controllers/videos");
const { my_liked_video } = require("../controllers/videos");
const { likeDislikeVideo } = require("../controllers/videos");
const { showVideoComments } = require("../controllers/videos");
const { delete_comment } = require("../controllers/videos");
const { postComment } = require("../controllers/videos");
const { All_videoCategory } = require("../controllers/videos");
const { getVideoBySoundId } = require("../controllers/videos");
const { addvideo_share } = require("../controllers/videos");
const { sectionVideo } = require("../controllers/videos");
const { downloadFile } = require("../controllers/videos");
const { add_watched_videos } = require("../controllers/videos");
const { allSounds } = require("../controllers/sounds");
const { my_FavSound } = require("../controllers/sounds");
const { fav_sound } = require("../controllers/sounds");
const { fetchmore_hashtag } = require("../controllers/hashtag");
const { HashtagUnfollow } = require("../controllers/hashtag");
const { gethashtag_suggestion } = require("../controllers/hashtag");
const { addHashtagFollow } = require("../controllers/hashtag");
const { SearchByHashTag } = require("../controllers/hashtag");
const { signup } = require("../controllers/users");
const { edit_profile } = require("../controllers/users");
const { uploadImage } = require("../controllers/users");
const { getVerified } = require("../controllers/users");
const { get_user_data } = require("../controllers/users");
const { morefamousCreator } = require("../controllers/users");
const { get_followers } = require("../controllers/users");
const { get_followings } = require("../controllers/users");
const { follow_users } = require("../controllers/users");
const { getNotifications } = require("../controllers/notification");
const { clearnotification } = require("../controllers/notification");
const { getWebUrl } = require("../controllers/others");
const { All_language } = require("../controllers/others");
const { updateUserLanguage } = require("../controllers/others");
const { fetch_cities } = require("../controllers/others");
const { All_Questions } = require("../controllers/others");
const { fetch_questions } = require("../controllers/others");
const { QnAwith_req } = require("../controllers/others");
const { All_reportreasons } = require("../controllers/others");
const { addvideo_report } = require("../controllers/others");
const { discover } = require("../controllers/discover");
const { getPaymentDetails } = require("../controllers/payment");


router.use(multer().single('file'));

router.get("/login", loginView);
router.get("/register", registerView);
router.post("/showAllVideos", showAllVideos);
router.post("/showMyAllVideos", showMyAllVideos);
router.post("/my_private_video", my_private_video);
router.post("/my_liked_video", my_liked_video);
router.post("/likeDislikeVideo", likeDislikeVideo);
router.post("/showVideoComments", showVideoComments);
router.post("/postComment", postComment);
router.post("/delete_comment", delete_comment);
router.post("/All_videoCategory", All_videoCategory);
router.post("/getVideoBySoundId", getVideoBySoundId);
router.post("/addvideo_share", addvideo_share);
router.post("/sectionVideo", sectionVideo);
router.post("/downloadFile", downloadFile);
router.post("/add_watched_videos", add_watched_videos);
router.post("/allSounds", upload.fields([]), allSounds);
router.post("/my_FavSound", my_FavSound);
router.post("/fav_sound", fav_sound);
router.post("/fetchmore_hashtag", fetchmore_hashtag);
router.post("/HashtagUnfollow", HashtagUnfollow);
router.post("/gethashtag_suggestion", gethashtag_suggestion);
router.post("/addHashtagFollow", addHashtagFollow);
router.post("/SearchByHashTag", SearchByHashTag);
router.post("/signup", signup);
router.post("/edit_profile", edit_profile);
router.post("/uploadImage", uploadImage);
router.post("/getVerified", getVerified);
router.post("/get_user_data", get_user_data);
router.post("/morefamousCreator", morefamousCreator);
router.post("/get_followers", get_followers);
router.post("/get_followings", get_followings);
router.post("/follow_users", follow_users);
router.post("/getNotifications", getNotifications);
router.post("/clearnotification", clearnotification);
router.post("/All_language", All_language);
router.post("/getWebUrl", getWebUrl);
router.post("/updateUserLanguage", updateUserLanguage);
router.post("/fetch_cities", fetch_cities);
router.post("/All_Questions", All_Questions);
router.post("/fetch_questions", fetch_questions);
router.post("/QnAwith_req", QnAwith_req);
router.post("/All_reportreasons", All_reportreasons);
router.post("/addvideo_report", addvideo_report);
router.post("/discover", discover);
router.post("/getPaymentDetails", getPaymentDetails);

// router.post('/signup', function(req, res) {
//   console.log("*****");
//   console.log(req.body);
//   console.log(req.file);
//   res.send("file saved on server");
//  });


// router.delete("/QRcode", verifyToken, QRcodeView);

module.exports = {
  "routes": router
};
