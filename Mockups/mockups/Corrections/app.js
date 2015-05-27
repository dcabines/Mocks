Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [
		'Incomplete',
		'History'
	],
	views: [
		'MyViewport',
		'MyApp.view.AddPunch'
	],
	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
