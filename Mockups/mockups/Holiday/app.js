Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	stores: [
		'Calendars',
		'Systems',
		'Shifts',
		'Holidays',
		'Sites',
		'Employees'
	],
	views: [
		'MyViewport'
	],
	name: 'MyApp',
	autoCreateViewport: 'MyApp.view.MyViewport'
});
