var today = new Date();
var lastMonth = (new Date());
lastMonth.setMonth(today.getMonth() - 1);

Ext.define('MyApp.panel.Main', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.main',

	requires: [
		'MyApp.grid.Punches',
		'MyApp.grid.Incomplete',
		'MyApp.grid.History'
	],

	items: [
		{
			title: 'Incomplete',

			layout: {
				type: 'hbox',
				align: 'stretch'
			},

			items: [
				{
					flex: 1,
					xtype: 'incomplete',
					title: 'Incomplete',
					store: 'Incomplete'
				},
				{
					flex: 1,
					xtype: 'punches',
					title: 'Punches',
					store: 'Incomplete'
				}
			]
		},
		{
			xtype: 'history',
			title: 'History',
			store: 'History'
		}
	]
});
