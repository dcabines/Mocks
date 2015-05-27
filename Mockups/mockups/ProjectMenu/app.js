Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [],

	views: [
		'MyViewport'
	],

	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
