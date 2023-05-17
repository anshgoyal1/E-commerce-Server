// IMPORTS FROM Packages
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//IMPORTS FROM Files
const authRouter = require("./routes/auth.js");

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());
app.use(authRouter);

//connect to db
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
