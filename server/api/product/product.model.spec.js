'use strict';

var should = require('should');
var app = require('../../app');
var Product = require('./product.model');



describe('Product Model',function(){
	var productObj = {
		name: 'Test Product',
		price: 123456
	};
	beforeEach(function(done){
			var product = new Product(productObj)
			product.save(function(){
				done();
			});
	});
	afterEach(function(done){
		Product.find({}).remove(function(err){
			done();
		})
	});
	
	it('should exist',function(){
		Product.find({},function(err,products){
			products.should.have.length(1)
		});
	});
	describe('default values',function(){
		it('quantity should default to 0',function(){
			Product.find({name: productObj.name},function(err,prod){
				prod[0].qty.should.equal(0);
			})
		});
		it('available should default to true',function(){
			Product.find({name: productObj.name},function(err,prod){
				prod[0].available.should.equal(true);
			});
		})
		it('category should default to Misc',function(){
			Product.find({name: productObj.name},function(err,prod){
				prod[0].category[0].should.equal('Misc');
			});
		})
	})
})