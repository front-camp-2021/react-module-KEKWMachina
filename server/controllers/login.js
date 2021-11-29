const fs = require("fs");
const path = require("path");

const pathToBrands = path.join(__dirname, "../user.json");

function login(request, response) {
  try {
    const data = fs.readFileSync(pathToBrands, "utf8");
    function validateUser() {
      const email = JSON.parse(data).users.find((user) => {
        return user.email === request.body.email;
      });
      if (!email) {
        response.send({ response: "wrong email" });
      } else if (email.password !== request.body.password) {
        response.send({ response: "wrong password" });
      } else {
        response.send({ response: "logged in" });
      }
    }
    validateUser();
    response.end();
  } catch (err) {
    response.send(err);
  }
}

module.exports = {
    login
}
