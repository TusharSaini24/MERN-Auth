const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const { MONGO_URL } = require("./config/keys");
const PORT = 9060;

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", userRoutes);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected successfully");

    if (process.env.NODE_ENV == "production") {
      const path = require("path");

      app.get("/", (req, res) => {
        app.use(express.static(path.resolve(__dirname, "client", "build")));
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }

    app.listen(PORT, () => {
      console.log("server started ");
    });
  })
  .catch((error) => {
    console.log("db error ", error);
  });
