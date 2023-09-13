const productModel = require('../models/Products');
const ErrorHandler = require("../utilies/ErrorHandler");




exports.createProduct = async (req, res, next) => {
  try {
    const { title } = req.body;
    const findProduct = await productModel.findOne({ title: title });
    if (findProduct) {
      return next(new ErrorHandler("This Product already exists", 400));
    }
    const products = await productModel.create(req.body);
    res.status(201).json({
      success: true,
      products,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};
// all products
exports.getAllProducts = async (req, res) => {
  const products = await productModel.find();
  res.status(200).json({ success: true, products });
};

exports.productDetails = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      message: "Doctor is not Found !!"
    });
  }
  res.status(200).json({
    success: true,
    product,

  });
};




exports.updateProduct = async (req, res) => {
  // const product = await productModel.findById(req.params.id);
  const product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, product });
};

// Delete Products
exports.deleteProduct = async (req, res, next) => {
  const product = await productModel.findByIdAndDelete(req.params.id);
  console.log(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
};