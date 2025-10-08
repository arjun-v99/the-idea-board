require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration for both development and production
const allowedOrigins = [
  "http://localhost:4200", // Local development
  "https://your-frontend.railway.app", // Production - UPDATE THIS after deploying frontend!
];

// Configure CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, curl, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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
