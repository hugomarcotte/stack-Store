/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');
var Role = require('../api/role/role.model');

Product.find({}).remove(function() {
  Product.create({
    name: 'product 1',
    price: 19.99,
    description: 'Great product',
    qty: 12,
    image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  }, {
    name: 'product 2',
    price: 19.99,
    description: 'Great product',
    qty: 12,
     image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  }, {
    name: 'product 3',
    price: 19.99,
    description: 'Great product',
    qty: 12,
    image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  },{
    name: 'Contraband',
    price: 999999.99,
    description: "You didn't buy this here",
    qty: 9,
    image: "http://milwaukee.brewers.mlb.com/mil/images/ballpark/y2012/im_noweapons_180x180.png"
  },{
    name: 'Headphones',
    price: 999.99,
    description: "The price is totally reasonable",
    qty: 12,
    image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  },{
    name: 'Dogs',
    price: 1000,
    description: 'How is this legal?',
    qty: 12,
    image: "http://www.prevention.com/sites/default/files/imagecache/slideshow_display/dog-dogue-de-bordeaux-puppy-410x290.jpg"
  },{
    name: 'Coffee',
    price: 1.99,
    description: 'Legal Drugs',
    qty: 12,
    image: "http://a.dryicons.com/images/icon_sets/travel_and_tourism_part_2/png/256x256/coffee.png"
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
  }, {
    provider: 'local',
    role: 'user',
    name: 'frank',
    email: 'frank@frank.com',
    password: 'frank'
  }, {
    provider: 'local',
    role: 'user',
    name: 'bob',
    email: 'bob@bob.com',
    password: 'bob'
  }, {
    provider: 'local',
    role: 'user',
    name: 'jimbo',
    email: 'jimbo@jimbo.com',
    password: 'jimbo'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Category.find({}).remove(function(){
  Category.create(
    {name: 'Electronics'},
    {name: 'Furniture'},
    {name: 'Misc'},
    function(){
      console.log('Populated Categories')
    }
  )
})

Role.find({}).remove(function(){
  Role.create(
    {role: 'admin'},
    {role: 'user'},
    function(){
      console.log('Populated Roles')
    }
  )
})

