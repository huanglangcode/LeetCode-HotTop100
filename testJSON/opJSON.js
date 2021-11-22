const mistql = require('mistql');

console.log('mistql.query("sandwich", { sandwich: "blt" }) === "blt" :>> ', mistql.query("sandwich", { sandwich: "blt" }) === "blt");