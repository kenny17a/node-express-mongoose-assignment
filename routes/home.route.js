const express = require("express")
const router = express.Router();
const newsController = require("../controllers/news.controller");
const checkNumber = require("../middleware/news.middleware")

router.get("/create", checkNumber, newsController.create);

module.exports = router