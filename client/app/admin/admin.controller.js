'use strict';

angular.module('stackStoreApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Product, Role, Category, Order ) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.newProduct = {category: []};
    $scope.orderDetails = {};
    $scope.addProduct = false;
    $scope.updateProduct = false;
    $scope.updateOrder = false;
    $scope.viewOrder = false;

    $scope.createNewProduct = function(product){
      Product.save(product);
      $scope.newProduct = {category: []};
      $scope.populateProducts();
      $scope.addProduct = false;
    }

    $scope.productUpdate = function(product){
      Product.updateProduct({id:product._id},product)
    }

    $scope.populateProducts = function(){
      $scope.products = Product.query();
    }
    $scope.populateProducts();

    $scope.deleteProduct = function(product){
      Product.delete({id:product._id});
      $scope.products.forEach(function(prod,i){
      if(prod === product){
          $scope.products.splice(i,1);
        };
      })
    }

    $scope.populateRoles = function(){
      $scope.roles = Role.query()
    };
    $scope.populateRoles();

    $scope.populateCategories =function(){
      $scope.categories = Category.query();
    };
    $scope.populateCategories();

    $scope.userUpdate = function(user){
      User.userUpdate( {id:user._id} ,user,function(){
        console.log(user)
        $scope.users = User.query()
        }, function(err){
          console.log('Error: ',err)
        }
      )
    }

    $scope.deleteUser = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.addCategory = function() {
      if($scope.selectedCategory) {
        if($scope.newProduct.category.indexOf($scope.selectedCategory) === -1) {
          $scope.newProduct.category.push($scope.selectedCategory);
        }
      }
    }

    $scope.removeCategory = function(category){
      var newProduct = $scope.newProduct.category;
      newProduct.splice(newProduct.indexOf(category),1)
    }

    $scope.populateOrders = function() {
      $scope.orderHistory = Order.query();
    }
    $scope.populateOrders();

    $scope.sumQty = function(array) {
      var total = 0;
      array.forEach(function(product) {
        total += product.quantity;
      })
      return total;
    }

    $scope.updateOrderStatus = function(order) {
      console.log(order)
      Order.updateOrder({id: order._id}, order);
    }


  })