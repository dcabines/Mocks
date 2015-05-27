Ext.define('MyApp.panel.InOut', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.inout',

	requires: [
		'MyApp.grid.IOResults',
		'MyApp.form.IOSearch',
		'Shared.panel.Legend'
	],

	layout: 'border',

	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					handler: function (button, e) {
						var search = this.up('panel').down('form');
						var isHidden = search.isHidden();
						search.setHidden(!isHidden);
					},
					text: 'Search'
				}
			]
		}
	],
	items: [
		{
			xtype: 'iosearch',
			region: 'north',
			border: false
		},
		{
			xtype: 'ioresults',
			region: 'center',
			border: false,
			columnLines: true,
			store: 'Shared.store.InOut'
		},
		{
			xtype: 'legend',
			region: 'east',
			floatable: false,
			width: 150,
			collapsed: true,
			collapsible: true,
		}
	]
});