const { frutas, dinero } = require("./frutas");

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Hola amigos jeejjeje",
    e: "oO",
    T: "U ",
  })
);

frutas.forEach(function (item) {
  console.count(item);
});

console.log(dinero);
