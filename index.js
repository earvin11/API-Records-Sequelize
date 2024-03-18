const express = require('express');
//import mongoose from "mongoose";
const cors = require("cors");
const app=require('./app')
const recordRoutes = require("./routes/record.js");

require('dotenv').config();//import dotenv from "dotenv";
//To read the .env-file you'll need to install something that will read that file, for instance the dotenv package
const sequelize = require('./database');


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/records", recordRoutes);

//backend greeting page
app.get("/", (req, res) => {
  res.send("employee backende erisildi");
});

//const CONNECTION_URL =
//("your mongo db url here");



/*mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));*/

async function main(){
  //await app.listen(app.get('port'));
  //console.log('running ',app.get('port'));
  /*sequelize.sync().then(() => {
    app.listen(app.get('port'), () => {
        console.log('running ',app.get('port'));
    });
  }).catch(error => {
      console.error('Error al sincronizar la base de datos:', error);
  });*/

  try {
    // Sincronizar el modelo con la base de datos
    await sequelize.sync();
    console.log('Base de datos sincronizada correctamente');

    // Iniciar el servidor en el puerto 3000
    app.listen(app.get('port'), () => {
      console.log('Servidor corriendo en el puerto ',app.get('port'));
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }

}
main();