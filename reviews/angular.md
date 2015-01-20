# Angular

### Controllers 
- Should not use $http in Controllers, or minimize the use of it.  Controllers main role is handling events in DOM and manipulating the data on the frontend.  If they're also responsible for shuttling data back and forth then they get reallyheavy.  Should put all this into factories/services.
    - CheckoutCtrl is good example, mix of Order factory and $http
    - Move more logic into the Order Factory (like creating the products [])
    - Move UUID generation of Users into Service
- Too much logic in AdminCtrl, should separate it out into multiple controllers

## Use of Factories
- Good use of Factories for Cart and Order and CartCookies, Cart especially
- 

### Directives
- Good use of directives for templates, can move more logic into the controllers of those directives rather than moving them into from the controller
    - Bad use of $parent.$parent in addProduct type things, that makes you very dependent on the directives placement, almost negates the value of separating it out to begin with.
    
### Views

Simple enough views, no crazy views.

### General

Good use of the generator, good understanding of Angular and how to use various components of it!
