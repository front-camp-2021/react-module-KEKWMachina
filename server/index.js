const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
const brands = require("./routes/brands");
const categories = require("./routes/categories");
const products = require("./routes/products");
const login = require("./routes/login");
const port = 3001;

server.use(cors());
server.use(bodyParser.json());

server.use("/products", products);
server.use("/products/search", products);
server.use("/products/wishlist", products);
server.use("/categories", categories);
server.use("/brands", brands);
server.use("/login", login);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
