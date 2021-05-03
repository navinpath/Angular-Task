
export default class MainController {
	constructor(
		$scope,
		$log,
	) {
		'ngInject';

		$scope.testing = true;
		$scope.testmodel = [{ id: 1 }];
		$scope.testdata = [
			{ id: 1, label: 'David' },
			{ id: 2, label: 'Jhon' },
			{ id: 3, label: 'Danny' },
		];
		$scope.testsettings = {
			selectionLimit: 1,
			selectedToTop: true,
			idProperty: 'id',
		};
		$scope.testevents = {
			onSelectionChanged() { // This event is not firing on selection of max limit
				$log.debug('you changed selection');
			},
		};

		$scope.example1model = [];
		$scope.example1data = [
			{ id: admins, label: 'Administrators' },
			{ id: authors, label: 'Authors' },
			{ id: consumers, label: 'Consumers' },
		];

		$scope.smartButtonTextProviderSettings = {
			smartButtonTextProvider(selectionArray) {
				return selectionArray.length + 2;
			},
		};
	}
}
