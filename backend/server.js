const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {

    return res.status(200).json({
      message: "Login successful"
    });

  } else {

    return res.status(401).json({
      message: "Invalid credentials"
    });

  }

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});