require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Configure CORS
const corsOptions = {
  // Allow requests from your Angular development server running on port 4200
  origin: "http://localhost:4200",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));
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
