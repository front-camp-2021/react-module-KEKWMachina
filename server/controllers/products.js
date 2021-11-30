const fs = require("fs");
const path = require("path");
const filterItems = require("../services/priceFilter");
const { v4: uuidv4 } = require("uuid");

const pathToBrands = path.join(__dirname, "../db.json");

function getProducts(request, response) {
  try {
    const data = fs.readFileSync(pathToBrands, "utf8");
    response.send(JSON.parse(data).products);
  } catch (err) {
    response.send(err);
  }
}

function getFilteredProducts(request, response) {
  const categories = Boolean(request.query.categories)
    ? request.query.categories.split(",")
    : [];
  const brands = Boolean(request.query.brands)
    ? request.query.brands.split(",")
    : [];
  const name = Boolean(request.query.name) ? request.query.name : "";
  const prices = request.query.price.split(",").map((price) => Number(price));
  try {
    const data = fs.readFileSync(pathToBrands, "utf8");
    const filteredItems = filterItems.filterData(
      filterItems.filterUserInput(
        name,
        filterItems.filterPrice(JSON.parse(data).products, prices)
      ),
      categories,
      brands
    );
    response.send(filteredItems);
  } catch (err) {
    response.send(err);
  }
}

function editProduct(request, response) {
  try {
    const db = JSON.parse(fs.readFileSync(pathToBrands, "utf8"));
    db.products = db.products.map((card) => {
      if (card.id === request.body.id) {
        card.images = request.body.images;
        card.title = request.body.title;
        card.rating = request.body.rating;
        card.price = request.body.price;
        card.category = request.body.category;
        card.brand = request.body.brand;
        card.discount = request.body.discount;
        return card;
      } else {
        return card;
      }
    });
    fs.writeFileSync(pathToBrands, JSON.stringify(db, null, 2));
    response.send(JSON.parse(fs.readFileSync(pathToBrands, "utf8")).products);
  } catch (err) {
    response.send(err);
  }
}

function addToWishlist(request, response) {
  try {
    const db = JSON.parse(fs.readFileSync(pathToBrands, "utf8"));
    db.products = db.products.map((card) => {
      if (card.id === request.body.id) {
        card.isFavourite = Boolean(!card.isFavourite);
        return card;
      } else {
        return card;
      }
    });
    fs.writeFileSync(pathToBrands, JSON.stringify(db, null, 2));
    response.send(JSON.parse(fs.readFileSync(pathToBrands, "utf8")).products);
  } catch (err) {
    response.send(err);
  }
}

function addProduct(request, response) {
  try {
    const db = JSON.parse(fs.readFileSync(pathToBrands, "utf8"));
    request.body.id = uuidv4();
    db.products.push(request.body);
    fs.writeFileSync(pathToBrands, JSON.stringify(db, null, 2));
    const db2 = JSON.parse(fs.readFileSync(pathToBrands, "utf8"));
    response.send(db2);
  } catch (err) {
    response.send(err);
  }
}

function deleteProduct(request, response) {
  try {
    const db = JSON.parse(fs.readFileSync(pathToBrands, "utf8"));
    db.products = db.products.filter((item) => {
      return item.title !== request.body.title;
    });
    fs.writeFileSync(pathToBrands, JSON.stringify(db, null, 2));
    response.send({ response: `${request.body.title} was deleted` });
  } catch (err) {
    response.send(err);
  }
}

module.exports = {
    getProducts,
    getFilteredProducts,
    editProduct,
    addProduct,
    addToWishlist,
    deleteProduct
}
