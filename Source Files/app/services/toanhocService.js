ungdungAngularJS.factory('toanhocService', function() {
    var factory = {};
    factory.phepnhan = function(a, b) {
        return a * b
    }
    return factory;
});
ungdungAngularJS.service('tinhBPService', function(toanhocService) {
    this.binhphuong = function(a) {
        return toanhocService.phepnhan(a, a);
    }
});