const router = require("express").Router();
const userController = require("./../controllers/userControllers");

router.get("/users", userController.getAllUsers);
router.post("/users/", userController.getPostUser);
router.get("/users/:id", userController.getUserById);
router.delete("/users/:id", userController.getUserDeleteById);
router.patch("/users/:id", userController.getPatchUser);
router.put("/users/:id", userController.getPutUser);

module.exports = router;
