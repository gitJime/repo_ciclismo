const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const categoriasRouter = require('./routes/categorias');
const ciclistasRouter = require('./routes/ciclista');
const eventoRouter = require('./routes/eventos');
const juezRouter = require('./routes/juez');
const organizadorRouter = require('./routes/organizador');
const rutaRouter = require('./routes/rutas');
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use('/api/categoria', categoriasRouter);
app.use('/api/ciclista', ciclistasRouter);
app.use('/api/juez', juezRouter);
app.use('/api/evento', eventoRouter);
app.use('/api/organizador', organizadorRouter);
app.use('/api/ruta', rutaRouter);

app.listen(8800, () => {
  console.log("Backend server is running!");
});