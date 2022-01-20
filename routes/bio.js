const express = require("express")
const bioController = require("../controllers/bio")

const router = express.Router()

router.post("/", bioController.retrieveBio)

router.post("/skill", bioController.skillDetails)

module.exports = router