            //  MongoDB Queries 

// 1)  Find all the information about each products.  
 
db.Details.find();

//2)Find the product price which are between 400 to 800.

db.Details.find({product_price:{$gte:400,$lte:800}});

//3)Find the product price which are not between 400 to 600

db.Details.find({product_price:{$nin:[400, 600]}});

//4)List the four product which are greater than 500 in price .
db.Details.find({product_price:{$gt:500}},{},{limit:4});

//5)Find the product name and product material of each products
db.Details.find({},{product_name:1,product_material:1});

//6)Find the product with a row id of 10
db.Details.find({id:"10"}); (or) 
db.Details.findOne({id:"10"});

//7)Find only the product name and product material
db.Details.find({},{_id:0,id:0,product_name:1,product_price:0,product_material:1,product_color:0});
(or)
db.Details.find({},{product_name:1,product_material:1,_id:0});

//8)Find all products which contain the value of soft in product material 
db.Details.find({product_material:{$regex:"Soft"}});

//9)Find products which contain product color indigo  and product price 492.00
db.Details.find({$or:[{product_price:{$eq:492.00}},{product_color:{$eq:"indigo"}}]});

//10)Delete the products which product price value are 28
db.Details.deleteOne({product_price:{$eq:28}});

