const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/");
