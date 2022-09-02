const {
  register,
  login,
  getUser,
  updateProfile,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUser/:id", getUser);
router.post("/updateProfile/:id", updateProfile);
module.exports = router;
