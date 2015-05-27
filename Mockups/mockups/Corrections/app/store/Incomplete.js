Ext.define('MyApp.store.Incomplete', {
	extend: 'Ext.data.Store',
	storeId: 'Incomplete',

	data: [
		{ gid: '123', name: 'Jed Clampett', tin: '8:00AM 8/1/2014', shift: '1', tout: '', location: 'Door 3', activity: 'Doctor Note', approved: 'Yes' },
		{ gid: '123', name: 'Elly May Clampett', tin: '', shift: '1', tout: '7:00PM 8/2/2014', location: 'Door 1', activity: 'Non Productive', approved: 'Yes' },
		{ gid: '123', name: 'Jethro Bodine', tin: '8:00AM 8/3/2014', shift: '1', tout: '', location: 'Door 2', activity: '', approved: '' },
		{ gid: '123', name: 'Jane Hathaway', tin: '', shift: '1', tout: '7:00PM 8/4/2014', location: 'Door 2', activity: 'Late', approved: 'No' },
		{ gid: '123', name: 'Milburn Drysdale', tin: '8:00AM 8/5/2014', shift: '1', tout: '', location: 'Door 3', activity: 'Left Early', approved: 'No' }
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