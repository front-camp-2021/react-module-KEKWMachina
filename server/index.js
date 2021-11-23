const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();

const port = 3001;
server.use(cors());
server.use(bodyParser.json());

server.use("/login", (request, response) => {
  if (request.method === "POST") {
    try {
      const data = fs.readFileSync("user.json", "utf8");
      function validateUser() {
        const email = JSON.parse(data).users.find((user) => {
          return user.email === request.body.email;
        });
        if (!email) {
          response.send({ response: "wrong email" });
        }
        if (email.password !== request.body.password) {
          response.send({ response: "wrong password" });
        }
        response.send({ response: "logged in" });
      }
      validateUser();
      response.end();
    } catch (err) {
      response.send(err);
    }
  }
});

server.get("/products", (request, response) => {
  try {
    const data = fs.readFileSync("db.json", "utf8");
    response.send(JSON.parse(data).products);
  } catch (err) {
    response.send(err);
  }
});

server.get("/categories", (request, response) => {
  try {
    const data = fs.readFileSync("db.json", "utf8");
    response.send(JSON.parse(data).categories);
  } catch (err) {
    response.send(err);
  }
});

server.get("/brands", (request, response) => {
  try {
    const data = fs.readFileSync("db.json", "utf8");
    response.send(JSON.parse(data).brands);
  } catch (err) {
    response.send(err);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
