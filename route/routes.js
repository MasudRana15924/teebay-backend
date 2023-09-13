const express = require("express");
const { createUser,loginUser } = require("../Controllers/user");
const { createProduct, getAllProducts, deleteProduct, updateProduct, productDetails } = require("../Controllers/product");
const { newRent } = require("../Controllers/rent");
const { newBuy } = require("../Controllers/buy");

const router = express.Router();

// users routes
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

// products
router.route("/create/product").post(createProduct);
router.route("/get/all/products").get(getAllProducts);
router.route("/product/:id").get(productDetails);
router.route("/delete/products/:id").delete(deleteProduct);
router.route("/update/products/:id").put(updateProduct);

// rent
router.route("/create/rent").post(newRent);
router.route("/create/buy").post(newBuy);

module.exports = router;