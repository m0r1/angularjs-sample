var TwitterSearchCtrl = function ($scope, $http) {
  $scope.doSearch = function () {
    var uri = 'http://search.twitter.com/search.json?q='
    + $scope.query
    + '&callback=JSON_CALLBACK';

    $http.jsonp(uri).success(function (data) {
      console.dir(data.results);
      $scope.results = data.results;
    })
  }
}