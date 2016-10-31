'use strict';

describe('Controller: TodoexampleCtrl', function () {
  var $httpBackend, gettodos
  // load the controller's module
  beforeEach(module('websiteApp'));

  var TodoexampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    $httpBackend = $injector.get('$httpBackend');

    scope = $rootScope.$new();
    TodoexampleCtrl = $controller('TodoexampleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
    $httpBackend.expectGET('/todo').respond([]);
    expect(scope.todos.length).toBe(0);
  });

  // it('should add items to the list', function(){
  //     $httpBackend.flush();
  //     $httpBackend.expectPOST('/todo', 'Test 1').respond(201, '');
  //     $httpBackend.expectGET('/todo').respond([{id : 1, what: 'Test 1'}]);
  //     scope.todo  = 'Test 1';
  //     scope.addTodo();
  //     $httpBackend.flush();
  //     expect(scope.todos.length).toBe(1);
  // });

  // it('should add then remove item from the list', function(){
  //     $httpBackend.flush();
  //     $httpBackend.expectPOST('/todo', 'Test 1').respond(201, '');
  //     $httpBackend.expectGET('/todo').respond([{id: 1, what: 'Test 1'}]);
  //     scope.todo = 'Test 1';
  //     scope.addTodo();
  //     $httpBackend.flush();
  //     $httpBackend.expectDELETE('/todo/1').respond(201, '');
  //     $httpBackend.expectGET('/todo').respond([]);
  //     scope.removeTodo(0);
  //     expect(scope.todos.length).toBe(0);
  //     $httpBackend.flush();
  // });




});
