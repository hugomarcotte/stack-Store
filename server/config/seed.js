/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');
var Role = require('../api/role/role.model');
var Analytic = require('../api/analytic/analytic.model')
var Promotion = require('../api/promotion/promotion.model');


Product.find({}).remove(function() {
  Product.create({
    name: 'product 1',
    price: 1999,
    description: 'Great product',
    qty: 12,
    image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  }, {
    name: 'product 2',
    price: 1999,
    description: 'Great product',
    qty: 12,
     image: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"
  }, {
    name: 'Keurig',
    price: 39999,
    description: 'Coding fuel',
    category: ['Misc'],
    qty: 12,
    image: "https://www.filepicker.io/api/file/Co0e17KOQ5y8Uhi8WZJj"
  },{
    name: 'Cereal Dispensers',
    price: 999,
    description: "Mini-Wheats not included",
    category: ['Misc'],
    qty: 9,
    image: "https://www.filepicker.io/api/file/qufy3Z30RkeEJpZ6PBTk"
  },{
    name: 'Headphones',
    price: 9999,
    description: "Pretty self-explanatory",
    category: ['Electronics'],
    qty: 12,
    image: "https://images.lsonetwork.com/original/beatsheadphones-250x250.jpg"
  },{
    name: 'Fullstack Mascot',
    price: 1000,
    description: 'Super comfortable',
    category: ['Misc'],
    qty: 12,
    image: "https://www.filepicker.io/api/file/LL7FbQOUSqSKKb4ORdS4"
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
});

Role.find({}).remove(function(){
  Role.create(
    {role: 'admin'},
    {role: 'user'},
    function(){
      console.log('Populated Roles')
    }
  )
});

Role.find({}).remove(function(){
  Role.create(
    {role: 'admin'},
    {role: 'user'},
    function(){
      console.log('Populated Roles')
    }
  )
});

Promotion.find({}).remove(function(){
  Promotion.create(
    {code: 'promo10',
    startDate: Date.now(),
    endDdate: new Date('Tue Jan 30 2015'),
    percentOff: 10,
    active: true
    },
    function(){
      console.log('Populated Promotions')
    }
  )
});


Analytic.find({}).remove(function(){
  Analytic.create(
    {
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 1 2015')
    },
    {
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 2 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 3 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 4 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 5 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 6 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 7 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 8 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 9 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 10 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 11 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 12 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 13 2015')
    },{
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 14 2015')
    },
    {
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 15 2015')
    },
    {
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 16 2015')
    },
    {
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 17 2015')
    },
    {
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 18 2015')
    },
    {
      page : {"productPage" : (Math.random()*100).toFixed(0), "mainPage" : (Math.random()*100).toFixed(0)},
      date : new Date('Tue Jan 19 2015')
    },
    function(){
      console.log('Populated Analytic')
    }
  )
});
