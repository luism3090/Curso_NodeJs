const http = require("http");

const server = http.createServer((req, res) => {
  res.end("EStoy respondiendo a tu solicitud 2");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("escuchando solicitudes");
});
