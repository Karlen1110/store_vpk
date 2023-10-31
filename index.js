// require("dotenv").config();
//сервис
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();

    app.use("/api", routes);

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
