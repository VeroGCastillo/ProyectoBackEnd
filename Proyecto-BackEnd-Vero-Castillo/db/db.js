const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONECT);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Error al conectarse con la db");
  }
};

module.exports = { connect };
