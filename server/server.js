const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === "admin@ninjalogin.com" &&
    password === "Ninja123"
  ) {
    return res.status(200).json({
      success: true,
      message: "Login Successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Email or Password",
  });
});

app.listen(5000, () => {
  console.log("✅ Server is running on http://localhost:5000");
});