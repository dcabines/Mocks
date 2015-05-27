Ext.define('MyApp.store.Features', {
	extend: 'Ext.data.Store',
	storeId: 'Features',

	data: [
		{ gid: '123', name: 'Bob Dobbs', feature: 'OBO, Delegate', org: 'Y M C A', suborgs: false },
		{ gid: '123', name: 'Mary Jane', feature: 'Email Copy, Reports', org: 'N Y P D', suborgs: true },
	],

	fields: [
		{ name: 'gid', type: 'string' },
		{ name: 'name', type: 'string' },
		{ name: 'feature', type: 'string' },
		{ name: 'org', type: 'string' },
		{ name: 'suborgs', type: 'boolean' }
	]
});