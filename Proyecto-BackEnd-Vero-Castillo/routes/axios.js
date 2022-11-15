const express = require("express");
const axios = require("axios");
const { consultaAxios } = require("../controllers/axiosController");
const router = express.Router();

/* GET */

router.get("/poke", consultaAxios);

module.exports = router;
