const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

// Importar rutas
const AuthRouter = require("./routes/AuthRoute");
const ReviewRouter = require("./routes/ReviewRoute");
const UserRouter = require("./routes/UserRoute");

// Servidor de aplicaciones
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
// Rutas
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api/auth", AuthRouter);
app.use("/api/review", ReviewRouter);
app.use("/api/user", UserRouter);

// Puerto de Express y escucha
const PORT = process.env.PORT_KEY || 4006;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  connectDB();
});
