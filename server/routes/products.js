const express = require("express");
const router = express.Router();

const {
    getProducts,
    getFilteredProducts,
    editProduct,
    addProduct,
    deleteProduct,
    addToWishlist,
} = require("../controllers/products");

router.get("/", getProducts);
router.post("/", getFilteredProducts);
router.patch("/", editProduct);
router.patch("/wishlist", addToWishlist);
router.put("/", addProduct);
router.delete("/", deleteProduct);

module.exports = router;