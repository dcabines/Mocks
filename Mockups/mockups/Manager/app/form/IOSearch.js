Ext.define('MyApp.form.IOSearch', {
	extend: 'Ext.form.Panel',
	alias: 'widget.iosearch',

	bodyPadding: 10,
	bodyStyle: {
		background: '#DFE8F6'
	},

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			ui: 'footer',
			layout: {
				type: 'hbox',
				pack: 'end'
			},
			items: [
				{
					xtype: 'button',
					text: 'Search',
					handler: function () {
						var search = this.up('form');
						search.hide();
					}
				}
			]
		}
	],

	items: [
		{
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'container',
					layout: 'form',
					items: [
						{
							xtype: 'textfield',
							fieldLabel: 'Employee Name'
						},
						{
							xtype: 'datefield',
							fieldLabel: 'Start Date'
						},
						{
							xtype: 'combobox',
							fieldLabel: 'Org Codes',
							displayField: 'org',
							multiSelect: true,
							store: 'Shared.store.orgCodes'
						}
					]
				}
			]
		},
		{
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'container',
					layout: 'form',
					items: [
						{
							xtype: 'textfield',
							fieldLabel: 'HR ID'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'SAP ID'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'GID'
						}
					]
				}
			]
		}
	]
});