'use strict';

angular.module('stackStoreApp')
  .controller('MainCtrl', function ($scope, $http, Cart,CartCookies,Auth) {
    $scope.awesomeThings = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
    });

    $http.get('/api/categories').success(function(categories){
      $scope.categories = categories;
    });

    $scope.search = function() {
      if($scope.pCategory){
        $http.get('/api/products/search/'+$scope.searchTerm+'/'+$scope.pCategory).success(function(products) {
          $scope.products = products;
        })
      }
      else{
        $http.get('/api/products/search/'+$scope.searchTerm).success(function(products) {
          $scope.products = products;
        })
      }
    };

    $scope.categorySearch = function(cat) {
      $http.get('/api/products/category/'+cat).success(function(products) {
        $scope.pCategory = cat;
        $scope.products = products;
      })
    };

//Need to findOrCreate a cart here, and stick the cart ID in the cookie
//and then hit the product database to retrieve the product
//and put it in the cart
    $scope.addToCart = function(productId){ 
      var cartId = CartCookies.getCart();
      if(cartId){
        Cart.get({id:cartId},function(result){
          result.products.push(productId);

          Cart.updateCart({id: cartId},{products:result.products},function(secondRes){
          })
        })
      } else {
        var userId = Auth.getCurrentUser()._id;
        var newCart ={userId: userId, products: productId}
          Cart.save(newCart,function(createdCart){
            CartCookies.createCookie(createdCart._id)
          });
      }
    };

  });
