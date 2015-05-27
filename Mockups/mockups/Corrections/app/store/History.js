Ext.define('MyApp.store.History', {
	extend: 'Ext.data.Store',
	storeId: 'History',

	data: [
		{ gid: '123', name: 'Jed Clampett', tin: '8:00AM 8/1/2014', shift: '1', tout: '7:00PM 8/1/2014', location: 'Door 3', activity: 'Doctor Note' },
		{ gid: '123', name: 'Elly May Clampett', tin: '8:00AM 8/2/2014', shift: '1', tout: '7:00PM 8/2/2014', location: 'Door 1', activity: 'Non Productive' },
		{ gid: '123', name: 'Jethro Bodine', tin: '8:00AM 8/3/2014', shift: '1', tout: '7:00PM 8/3/2014', location: 'Door 2', activity: '' },
		{ gid: '123', name: 'Jane Hathaway', tin: '8:00AM 8/4/2014', shift: '1', tout: '7:00PM 8/4/2014', location: 'Door 2', activity: 'Late' },
		{ gid: '123', name: 'Milburn Drysdale', tin: '8:00AM 8/5/2014', shift: '1', tout: '7:00PM 8/5/2014', location: 'Door 3', activity: '' }
	],

	fields: [
		{ name: 'gid', type: 'string' },
		{ name: 'name', type: 'string' },
		{ name: 'tin', type: 'string' },
		{ name: 'tout', type: 'string' },
		{ name: 'shift', type: 'string' },
		{ name: 'location', type: 'string' },
		{ name: 'activity', type: 'string' }
	]
});