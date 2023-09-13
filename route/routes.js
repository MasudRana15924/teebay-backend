const express = require("express");
const { createUser,loginUser } = require("../Controllers/user");
const { createProduct, getAllProducts, deleteProduct, updateProduct, productDetails, myProduct } = require("../Controllers/product");
const { newRent, myRentProduct } = require("../Controllers/rent");
const { newBuy } = require("../Controllers/buy");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

// users routes
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

// products
router.route("/create/product").post(isAuthenticatedUser,createProduct);
router.route("/my/product").get(isAuthenticatedUser, myProduct);
router.route("/get/all/products").get(getAllProducts);
router.route("/product/:id").get(productDetails);
router.route("/delete/products/:id").delete(deleteProduct);
router.route("/update/products/:id").put(updateProduct);

// rent
router.route("/create/rent").post(isAuthenticatedUser,newRent);
router.route("/create/buy").post(isAuthenticatedUser,newBuy);
router.route("/my/rent/list").get(isAuthenticatedUser,myRentProduct);

module.exports = router;