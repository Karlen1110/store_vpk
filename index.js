require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const purchaseRoute = require("./routes/purchaseRouter");
const errorHandler = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    app.use("/api", purchaseRoute);

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
