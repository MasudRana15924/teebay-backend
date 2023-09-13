const express = require("express");
const { createUser,loginUser } = require("../Controllers/user");
const { createProduct, getAllProducts, deleteProduct, updateProduct } = require("../Controllers/product");

const router = express.Router();

// users routes
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

// products
router.route("/create/product").post(createProduct);
router.route("/get/all/products").get(getAllProducts);
router.route("/delete/products/:id").delete(deleteProduct);
router.route("/update/products/:id").put(updateProduct);

module.exports = router;