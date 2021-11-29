const fs = require("fs");
const path = require("path");

const pathToBrands = path.join(__dirname, "../db.json");

function getBrands(request, response) {
  try {
    const data = fs.readFileSync(pathToBrands, "utf8");
    response.send(JSON.parse(data).brands);
  } catch (err) {
    response.send(err);
  }
}

module.exports = {
    getBrands
}