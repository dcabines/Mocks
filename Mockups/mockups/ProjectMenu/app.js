Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: ['Sample', 'Rates'],

	views: [
		'MyViewport'
	],

	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
