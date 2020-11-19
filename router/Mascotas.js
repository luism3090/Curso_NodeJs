const express = require("express");
const router = express.Router();

const Mascota = require('../models/mascota');

router.get("/", async (req, res) => {

try {
  const arrayMascotasDB = await Mascota.find();
  // console.log(arrayMascotasDB);

  res.render("mascotas", {
    arrayMascotas : arrayMascotasDB
    /*arrayMascotas: [
      { id: "0001", nombre: "Rex", descripcion: "Rex descripcion" },
      { id: "0002", nombre: "Perro", descripcion: "Perro descripcion" },
      { id: "0003", nombre: "Gato", descripcion: "Gato descripcion" },
    ],*/
  });

} catch (error) {
  console.log(error);
}

  
});

module.exports = router;
