'use strict';

describe('Controller: TodoexampleCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var TodoexampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoexampleCtrl = $controller('TodoexampleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

    it('should add items to the list', function(){
        scope.todo  = 'Test 1';
        scope.addTodo();
        expect(scope.todos.length).toBe(1);
    });

    it('should add then remove item from the list', function(){
        scope.todo = 'Test 1';
        scope.addTodo();
        scope.removeTodo(0);
        expect(scope.todos.length).toBe(0);
    });
});
