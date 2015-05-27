Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [
		'SearchResults',
		'Shared.store.History',
		'Shared.store.TargetSystems',
		'Shared.store.InOut',
		'overlappingRequests',
		'Shared.store.orgCodes'
	],
	views: [
		'MyViewport'
	],
	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
