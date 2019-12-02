const express = require("express");
const morgan = require("morgan");

const app = express();

// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan("dev"));

//This is the final request handler
// app.get('/', (req, res) => {
//   res.send('Hello Express!');
// });

app.listen(8000, () => {
  console.log("Express server is listening on port 8001!");
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;

  if (!a) {
    return res.status(400).send("A is required.");
  }

  if (!b) {
    return res.status(400).send("B is required.");
  }

  const numberA = parseInt(a);
  const numberB = parseInt(b);

  if (Number.isNaN(numberA)) {
    return "NumberA is NaN";
  }

  if (Number.isNaN(numberB)) {
    return res.status(400).send("NumberB is not a number.");
  }

  const c = numberA + numberB;

  const sumResponse = `The sum of ${numberA} and ${numberB} is ${c}.`;

  res.send(sumResponse);
});
