const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

const sequelize = require("./util/database");

const apiRouter = require("./routes/api");

app.use("/api", apiRouter.routes);

sequelize
  .authenticate()
  .then(() => {
    return sequelize.sync();
  })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.error(err));
