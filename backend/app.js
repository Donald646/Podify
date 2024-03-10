const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/testing", (req, res) => {
  // Dummy data for demonstration purposes
  const responseData = {
    message: "Hello from the API!",
    timestamp: new Date().toISOString(),
  };

  // Respond with JSON data
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
