/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');

Product.find({}).remove(function() {
  Product.create({
    name: 'product 1',
    price: 19.99,
    description: 'Great product',
    category: 'Electronics',
    review: [],
    qty: 12,
    image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  }, {
    name: 'product 2',
    price: 19.99,
    description: 'Great product',
    category: 'Electronics',
    review: [],
    qty: 12,
     image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  }, {
    name: 'product 3',
    price: 19.99,
    description: 'Great product',
    category: 'Furniture',
    review: [],
    qty: 12,
     image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  });
});


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Category.find({}).remove(function(){
  Category.create(
    {name: 'Electronics'}, 
    {name: 'Furniture'},
    {name: 'Jewelry'},
    function(){
      console.log('Populated Categories')
    }
  )
})

