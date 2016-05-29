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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TodoexampleCtrl.awesomeThings.length).toBe(3);
  });
});
