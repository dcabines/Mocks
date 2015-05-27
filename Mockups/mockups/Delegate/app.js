Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [
		'Features'
	],
	views: [
		'MyViewport'
	],
	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
