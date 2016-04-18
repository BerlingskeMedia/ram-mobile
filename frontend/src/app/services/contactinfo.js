'use strict';

app.factory('ContactInfo', function($http, BACKEND_ADDRESS, config) {
  return {
    get: function() {
      return $http.get(BACKEND_ADDRESS + '/contactinfo?page=' + config.contactPage);
    }
  }
});

