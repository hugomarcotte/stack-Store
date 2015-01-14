'use strict';

angular.module('stackStoreApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Product) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.newProduct={category: []};

    $scope.createNewProduct = function(product){
      Product.save(product);
      $scope.newProduct = {category: []};
      $scope.populateProducts();
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

    // $scope.populateRoles = function(){
    //   User.getRoles(function(roles){
    //     $scope.roles = roles;
    //   })
    // };

    // $scope.populateRoles();


    $http.get('/api/categories').success(function(categories){
      $scope.categories = categories;
    })


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

  $scope.userForms = {};

  $scope.showUserForm = function(user) {
    $scope.userForms[user._id + 'UserForm'] = true;
  }

  })