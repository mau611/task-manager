const express = require("express");
const bodyParser = require("body-parser");

const tareasRoutes = require("./routes/tareasRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api", tareasRoutes);

app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});
