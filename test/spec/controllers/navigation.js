'use strict';

describe('Controller: NavigationCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var NavigationCtrl,
    scope, rootScope, location, route;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($location, $route, $controller, $rootScope) {
    location = $location;
    rootScope = $rootScope;
    route = route;
    scope = $rootScope.$new();
    NavigationCtrl = $controller('NavigationCtrl', { $scope: scope });
  }));

  it('it should return true if the path of the menu is the same than the browser location',     function () {
      var menu = {path: '/Path'} ;
      spyOn(location, 'path').and.returnValue(menu.path);
      expect(scope.isActive(menu)).toBe(true);
  });
    
    it('it should return alse if the path of the menu is the NOT same than the browser location',     function () {
      var menu = {path: '/Path'} ;
      spyOn(location, 'path').and.returnValue('/SomethingElse');
      expect(scope.isActive(menu)).toBe(false);
    });
    
});
