const express = require('express');
const router = express.Router();


router.get("/getUserCompany", async (req, res, next) => {
  console.log("Get User Company");
  const result = require("../responses/getUserCompany_ACC.json");
  //const result = require("../responses/getUserCompany_NCC.json");

  res.status(200).json(
    result
  );
})


router.get("/getUserCountry", async (req, res, next) => {
  console.log("Get User Country");
  const result = require("../responses/getUserCountry_ACC.json");
  //const result = require("../responses/getUserCountry_NCC.json");

  res.status(200).json(
    result
  );
})


module.exports = router;
