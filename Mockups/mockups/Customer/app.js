Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [
		'Shared.store.SearchResults',
		'Shared.store.History',
		'Shared.store.TargetSystems',
		'Requests',
		'Workflow',
		'Adjustments',
		'Summary',
		'AdjustmentFrequency',
		'AdjustmentTypes',
		'Years'
	],
	views: [
		'MyViewport',
		'MyApp.view.Confirm'
	],
	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
