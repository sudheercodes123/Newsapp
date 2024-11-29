const express = require("express");
const { topHeadlinesNews, everyNews, sourcesNews } = require("../controllers/newsController");

const router = express.Router();
router.get("/", topHeadlinesNews);
router.get("/every", everyNews);
router.post("/sources", sourcesNews);


module.exports = router;
