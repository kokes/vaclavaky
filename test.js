const fs = require('fs');
const lib = require("./lib.js");

let filename = "snapshot.json";
if (process.argv.length === 3) {
    filename = `snapshot-${process.argv[2]}.json`;
}

const numbers = ["12", "1", "1000", "1.23", "1,34", "1000000", "23456789"]

const res = [];
let j = 0;
for (let obj of lib.convTgObj) {
    console.log(obj.label);
    for (let convType of Object.keys(obj.conversions)) {
        for (let number of numbers) {
            for (let mul of Object.keys(lib.natMap)) {
                for (let unit of Object.keys(lib.units[convType])) {
                    j += 1;
                    if (j % 17 != 3) {
                        continue;
                    }
                    res.push(lib.numToText(number, mul, unit, convType))
                }
            }
        }
    }
}

console.log(`\nsaving to ${filename}`);
fs.writeFileSync(filename, JSON.stringify(res, null, 2));
