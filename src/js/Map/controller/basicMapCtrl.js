angular.module('n52.core.map')
        .controller('SwcBasicMapCtrl', ['$scope', 'mapService', 'leafletData', '$rootScope',
          function ($scope, mapService, leafletData, $rootScope) {
            $scope.map = mapService.map;

            $rootScope.$on('resizeMap', function () {
              leafletData.getMap(mapService.map.id).then(function (map) {
                map.invalidateSize(false);
              });
            });

            var icon = {
            	div_icon: {
		            type: 'div',
		            iconSize: [230, 0],
		            html: 'Using <strong>Bold text as an icon</strong>: Lisbon',
		            popupAnchor:  [0, 0]
	        	},
            }

          }]);