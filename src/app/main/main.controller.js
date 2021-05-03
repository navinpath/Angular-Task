/*
	eslint no-param-reassign: [
		"error",
		{
			"props": true,
			"ignorePropertyModificationsFor": [
				"$scope"
			]
		}
	]
*/

export default class MainController {
	constructor(
		$scope,
		$log,
	) {
		'ngInject';

		$scope.testing = true;
		$scope.testmodel = [{ id: 1 }];
		$scope.testdata = [
			{ role_id: admins, role: 'Administrators', role_description: 'Can Manage Content and Users', created_date: '2020-02-19T23:54:28.130Z' },
			{ role_id: authors, role: 'Authors', role_description: '', created_date: '2020-02-19T23:54:28.130Z' },
			{ role_id: consumers, role: 'Consumers', role_description: 'Can Execute Reports and Dashboards', created_date: '2020-02-19T23:54:28.130Z' },
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


		$scope.smartButtonTextProviderSettings = {
			smartButtonTextProvider(selectionArray) {
				return selectionArray.length + 2;
			},
		};
	}
}
