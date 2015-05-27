Ext.define('MyApp.form.AppSearch', {
	extend: 'Ext.form.Panel',
	alias: 'widget.appsearch',

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
							xtype: 'combobox',
							fieldLabel: 'Transaction Type',
							displayField: 'system',
							multiSelect: true,
							store: 'Shared.store.TargetSystems'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'Trans ID'
						},
						{
							xtype: 'combobox',
							fieldLabel: 'Form Type',
							displayField: 'system',
							multiSelect: true,
							store: 'Shared.store.TargetSystems'
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
							xtype: 'datefield',
							fieldLabel: 'From Date'
						},
						{
							xtype: 'datefield',
							fieldLabel: 'To Date'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'Org Name'
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
							fieldLabel: 'First Name'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'Last Name'
						}
					]
				}
			]
		}
	]
});