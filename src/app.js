const express = require("express");
const calculator = require("./calculator");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("SonarQube Demo App");
});

app.get("/calculate/:a/:b/:op", (req, res) => {
  try {
    const result = calculator(
      parseInt(req.params.a),
      parseInt(req.params.b),
      req.params.op
    );
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;
