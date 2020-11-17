const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinámico chingon" });
});

router.get("/servicios", (req, res) => {
  res.render("servicios", {
    tituloServicios: "Mi mensaje desde mi servicio",
  });
});

module.exports = router;
