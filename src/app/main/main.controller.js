
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
			{ role_id: authors, role: 'Authors', role_description: '', created_date: '2020-02-19T23:54:28.204Z' },
			{ role_id: consumers, role: 'Consumers', role_description: 'Can Execute Reports and Dashboards', created_date: '2020-02-19T23:54:28.130Z' },
			];
	
		$scope.smartButtonTextProviderSettings = {
			smartButtonTextProvider(selectionArray) {
				return selectionArray.length + 2;
			},
		};
	}
}
