'use strict';

app.factory('Search', function($resource, BACKEND_ADDRESS, config) {
    return $resource(BACKEND_ADDRESS + '/search?page=:page&query=:query&site=' + config.searchDomain);
});



