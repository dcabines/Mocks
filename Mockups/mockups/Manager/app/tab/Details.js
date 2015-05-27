Ext.define('MyApp.tab.Details', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.details',

	requires: [
		'MyApp.grid.History',
		'MyApp.panel.RequestInfo'
	],

	items: [
		{
			xtype: 'history',
			title: 'Workflow',
			border: false,
			store: 'Shared.store.History'
		},
		{
			xtype: 'history',
			title: 'All Seqs',
			border: false,
			store: 'Shared.store.History'
		},
		{
			xtype: 'history',
			title: 'Correspondence',
			border: false,
			store: 'Shared.store.History'
		},
		{
			xtype: 'requestInfo',
			title: 'Request Information',
			border: false
		}
	]
});