  angular.module('sportsApp', [])
    .controller('MainCtrl', function($scope, $http) {
      $scope.players = [];
      $scope.newplayer = {};

      var fetchPlayers = function() {

         return $http.get('/demo/getplayers').then(function(response) {
          $scope.players = response.data;
        }, function(errResponse) {
          console.error('Error while fetching players');
        });
      };

      fetchPlayers();

      $scope.addplayer = function() {
        $http.post('/demo/insertplayer', $scope.newplayer).then(function(response) {

			fetchPlayers();

		}, function(errResponse) {
          console.error('Error while inserting player');
        });
      };

      $scope.fetchInfo = function(){
              $http.post('/demo/getAsset').then(function(response){
                  $scope.infobox = response.data;
              },
              function(errResponse){
                  console.error('Error while fetching Assets');
              });
          }
    });
