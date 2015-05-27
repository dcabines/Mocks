Ext.define('MyApp.panel.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.main',

	requires: [
		'MyApp.view.Feature',
		'MyApp.view.Lookup'
	],

	layout: {
		type: 'hbox',
		align:'stretch'
	},

	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					text: 'Save'
				},
				{
					text: 'Cancel'
				},
				'-',
				{
					text: 'Add',
					handler: function () {
						var window = Ext.create({
							xtype: 'Lookup',
							title: 'Lookup Delegate'
						});
						window.show();
					}
				},
				{
					text: 'Edit',
					handler: function () {
						var window = Ext.create({
							xtype: 'Feature',
							title: 'Edit Feature'
						});
						window.show();
					}
				}
			]
		}
	],

	items: [
		{
			xtype: 'grid',
			store: 'Features',
			flex: 1,
			columns: [
				{
					text: 'GID',
					dataIndex: 'gid'
				},
				{
					text: 'Name',
					dataIndex: 'name',
					flex: 1
				},
				{
					text: 'Features',
					dataIndex: 'feature',
					flex: 1
				},
				{
					text: 'Org Code',
					dataIndex: 'org',
					flex: 1
				},
				{
					xtype: 'booleancolumn',
					text: 'Include Suborgs',
					dataIndex: 'suborgs',
					flex: 1
				}
			]
		}
	]
});
