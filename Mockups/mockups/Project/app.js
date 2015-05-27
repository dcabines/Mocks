Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [
		'MenuLinks'
	],

	views: [
		'MyViewport'
	],

	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
