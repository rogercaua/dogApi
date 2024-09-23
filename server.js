const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" })

const DB = process.env.DATABASE

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("conectado ao banco de dados"))
  .catch(err => console.log("erro ao conectar ao banco de dados", err));

const port  = process.env.PORT || 3222;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
})

