const express = require("express");
const dogController = require("../controller/dogController");
const router = express.Router();



router.post("/dog", dogController.createDog);
 
module.exports = router