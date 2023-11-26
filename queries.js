// For the following question write the corresponding MongoDB queries

// 1. Find all the information about each products
db.product.find();

// 2. Find the product price which are between 400 to 800
db.product.find({ product_price: { $gte: 400, $lte: 800 } });

// 3. Find the product price which are not between 400 to 600
db.product.find({ product_price: { $not: { $gte: 400, $lte: 600 } } });

// 4. List the four product which are grater than 500 in price 
// a. Below will display 3 products grater than 500 in price excluding 500
db.product.find({ product_price: { $gt: 500 } });
// b. Below will display 4 products grater than 500 in price including 500
db.product.find({ product_price: { $gte: 500 } });

// 5. Find the product name and product material of each products
db.product.find({}, { product_name: 1, product_material: 1 });

// 6. Find the product with a row id of 10
db.product.find({ id: '10' });

// 7. Find only the product name and product material
db.product.find({}, { product_name: 1, product_material: 1 });

// 8. Find all products which contain the value of soft in product material 
db.product.find({ product_material: { $in: ["Soft"] } });

// 9. Find products which contain product color indigo and product price 492.00
//a. Displaying all product whose having color as indigo and price as 492.00 
// (assuming any product contain with color as indigo and price as 492)
db.product.find({ $or: [{ product_color: "indigo" }, { product_price: 492 }] });
// b. Displaying all product whose having color as indigo and price as 492 
//  (assuming it should satisfy both condition in one product)
// nothing will get displayed as there is no product which contain both, color as indigo & price as 492

// 10. Delete the products whose price value is 47.00 
db.product.deleteMany({ product_price: 47 });
