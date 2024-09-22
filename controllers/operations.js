const express = require("express");
const operationsRouter = express.Router();

operationsRouter.route("/add").post((req, res) => {
  let { num1, num2 } = req.body;
  num1 = Number(num1);
  num2 = Number(num2);
  res.json({ result: `The sum of ${num1} and ${num2} is ${num1 + num2}` });
});

operationsRouter.route("/subtract").post((req, res) => {
  let { num1, num2 } = req.body;
  num1 = Number(num1);
  num2 = Number(num2);
  res.json({ result: ` ${num1} minus ${num2} is ${num1 - num2}` });
});

operationsRouter.route("/multiply").post((req, res) => {
  let { num1, num2 } = req.body;
  num1 = Number(num1);
  num2 = Number(num2);
  res.json({ result: `The product of ${num1} and ${num2} is ${num1 * num2}` });
});

operationsRouter.route("/divide").post((req, res) => {
  let { num1, num2 } = req.body;
  num1 = Number(num1);
  num2 = Number(num2);
  if (num2 === 0) {
    return res.status(400).send("Division by Zero is not allowed");
  }
  res.json({
    result: `The division of ${num1} by ${num2} gives ${num1 / num2}`,
  });
});

module.exports = operationsRouter;
