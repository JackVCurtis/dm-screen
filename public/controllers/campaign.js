var CampaignCtrl = function($scope){
	$scope.campaignSearch = "";
	var allCampaigns = ['foo', 'bar', 'baz'];

	function refreshList(){
		$scope.displayedCampaigns = ['foo', 'bar', 'baz'];		
	}
	function filterCampaigns(){
		$scope.displayedCampaigns = allCampaigns.filter(function(name){
			// console.log('filtering by: ', $scope.campaignSearch)
			return name.indexOf($scope.campaignSearch) >= 0; // Replace w/fuzzy search
		});
	}
	refreshList();

	$scope.handleSearch = function($event){
		console.log($scope.campaignSearch);

		if ( event.keyCode >= 65 && event.keyCode < 91 ) {
			if ($scope.campaignSearch.length === 0){
				refreshList();
			}
			else {
				filterCampaigns();
			}
		}
	};




};

CampaignCtrl.$inject = ['$scope'];

module.exports = CampaignCtrl;