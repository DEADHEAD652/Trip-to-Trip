const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const { update, remove, read } = require("../controllers/userController");

router.post("/signup", auth.UserSignup);
router.post("/signin", auth.signin);
router.get("/signout", auth.signout);

router.get("/", auth.userAuth, auth.checkRole(["admin"]), auth.readall); //get all users
router.get("/:id", auth.userAuth, auth.checkRole(["admin"]), read);
router.patch("/:id", auth.userAuth, auth.checkRole(["admin", "user"]), update);
router.delete("/:id", auth.userAuth, auth.checkRole(["admin"]), remove);
router.get("/me", auth.userAuth, read);

module.exports = router;
