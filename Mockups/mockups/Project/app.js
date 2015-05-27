Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: ['MenuLinks', 'Sample', 'Rates'],

	views: [
		'MyViewport'
	],

	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
