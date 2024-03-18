const express = require('express');

const {
  getRecords,
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/records.js");

const router = express.Router();

router.get("/", getRecords);
router.get("/:id", getRecord);
router.post("/", createRecord);
router.patch("/:id", updateRecord);
router.delete("/:id", deleteRecord);

module.exports = router;
