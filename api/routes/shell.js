const express = require('express');
const router = express.Router();

global.counter = 0;

function increaseCounter(){
  global.counter = global.counter + 1
}

router.get("/stationsaround/aroundLocation/:lat/:long/:radius", async (req, res, next) => {
  console.log("Get Stations Around");
  const result = require("../responses/stationsAround.json");

  res.status(200).json(
    result
  );
})

router.get("/getUserCard", async (req, res, next) => {
  console.log("Get User Card");
  const result = require("../responses/userCard_active.json");

  res.status(200).json(
    result
  );
})

router.post("/fuelingsession", async (req, res, next) => {
  console.log("Post Fueling Card");
  const result = require("../responses/fuelingsession.json");

  res.status(200).json(
    result
  );
})

router.post("/getfuelingsummary", async (req, res, next) => {
  increaseCounter();
  const result_incomplete = require("../responses/fuelingsummary_incomplete.json");
  const result_complete = require("../responses/fuelingsummary_complete.json");

  if(global.counter % 15 == 0){
    var result = result_complete;
    console.log("Get Fuelingsummary Completed");
  }else{
    var result = result_incomplete;
    console.log("Get Fuelingsummary Incomplete");
  }
  res.status(200).json(
    result
  );
})

router.get("/getusertransactions", async (req, res, next) => {
  console.log("Get User Card");
  const result = require("../responses/userTransactions.json");

  res.status(200).json(
    result
  );
})


module.exports = router;
