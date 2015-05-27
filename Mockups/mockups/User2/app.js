Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [
		'Shared.store.requests',
		'Shared.store.requestTypes'
	],
	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
