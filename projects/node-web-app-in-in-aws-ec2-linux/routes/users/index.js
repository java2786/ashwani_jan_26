const express = require("express");
const router = express.Router();

const handlers = require("./handlers");

router.get("/", handlers.getAllUsers)
router.get("/:name", handlers.getUserByName)
router.post("/", handlers.createUser)
router.delete("/:index", handlers.deleteUserByIndex)
router.put("/:index", handlers.updateUserByIndex)

module.exports = router; 