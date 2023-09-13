const { ObjectId } = require('mongodb');
const rentModel = require('../models/Rent');
exports.newRent = async (req, res, next) => {
    const {
        title, category, description, price, rentprice, rentType,from,to

    } = req.body;

    const rent = await rentModel.create({
        title, category, description, price, rentprice, rentType,from,to,
        // user: req.user._id,
    });
    res.status(201).json({
        success: true,
        rent,
    });
};