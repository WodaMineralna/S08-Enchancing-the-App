const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProductsPage = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop/product-list", {
    products,
    pageTitle: "Shop",
    path: "/",
  });
};
