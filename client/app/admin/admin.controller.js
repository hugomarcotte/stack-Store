'use strict';

angular.module('stackStoreApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, editProduct) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.newProduct={category: []};

    $scope.productUpdate = function(product) {
      editProduct.updateProduct(product);
    }

    $scope.deleteUser = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.populateProducts = function(){
      editProduct.getProducts(function(products) {
      $scope.products = products;
      })
    };

    $scope.populateProducts();

    $scope.deleteProduct = function(product) {
      // console.log('clicked')
      // $http.delete('/api/products/'+product._id);
      $scope.products.forEach(function(prod,i){
      if(prod === product){
          $scope.products.splice(i,1);
        };
      })
      editProduct.deleteProduct(product);
    };

    $http.get('/api/categories').success(function(categories){
      $scope.categories = categories;
    })

    $scope.createNewProduct = function(product){
      editProduct.addProduct(product);
      $scope.newProduct = {category: []};
      $scope.populateProducts();
    }

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

  $scope.userForms = {};

  $scope.showUserForm = function(user) {
    $scope.userForms[user._id + 'UserForm'] = true;
  }

  })