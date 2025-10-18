# 🗃️ MongoDB Query Practice
## 📘 Overview

This project contains basic MongoDB queries performed on a Details collection to practice CRUD operations and filtering.

## 🔍 Queries Used

1️⃣ Find all products
db.Details.find();

2️⃣ Products with price between 400–800
db.Details.find({ product_price: { $gte: 400, $lte: 800 } });

3️⃣ Price not between 400–600
db.Details.find({ product_price: { $nin: [400, 600] } });

4️⃣ Four products with price > 500
db.Details.find({ product_price: { $gt: 500 } }).limit(4);

5️⃣ Show product name & material only
db.Details.find({}, { product_name: 1, product_material: 1 });

6️⃣ Product with ID = 10
db.Details.findOne({ id: "10" });

7️⃣ Products with “Soft” material
db.Details.find({ product_material: { $regex: "Soft" } });

8️⃣ Products with color “indigo” or price 492
db.Details.find({ $or: [{ product_price: 492 }, { product_color: "indigo" }] });


9️⃣ Delete products with price = 28

db.Details.deleteOne({ product_price: 28 });
