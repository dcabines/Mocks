Ext.define('MyApp.view.MyViewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.myviewport',

	requires: [
		'Shared.grid.PTOCalendar',
		'Shared.panel.Legend',
		'Shared.store.requestTypes',
		'Shared.store.requests',
		'Shared.toolbar.PTOSimple'
	],

	layout: 'fit',

	items: [
		{
			xtype: 'tabpanel',
			items: [
				{
					xtype: 'panel',
					layout: 'border',
					title: 'PTO Tracker Calendar',
					items: [
						{
							xtype: 'panel',
							region: 'west',
							floatable: false,
							collapsible: true,
							bodyStyle: {
								background: '#DFE8F6'
							},
							title: 'PTO Hours',
							layout: {
								type: 'vbox',
								align: 'stretch'
							},
							items: [
								{
									xtype: 'container',
									layout: 'form',
									items: [
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'Service Date',
											value: '08/15/1997'
										},
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'PTO Estimated',
											value: '200.04'
										},
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'PTO Used',
											value: '4.00'
										},
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'PTO Requested',
											value: '0.00'
										},
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'PTO remaining',
											value: '196.04'
										}
									]
								},
								{
									xtype: 'panel',
									border: false,
									width: 150,
									layout: 'form',
									bodyStyle: {
										background: '#DFE8F6'
									},
									title: 'Floating Holidays',
									items: [
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'Used',
											value: '2'
										},
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'Remaining',
											value: '3'
										},
										{
											xtype: 'displayfield',
											width: 150,
											fieldLabel: 'Requested',
											value: '0'
										}
									]
								},
								{
									xtype: 'panel',
									border: false,
									layout: 'form',
									bodyStyle: {
										background: '#DFE8F6'
									},
									title: 'Submit Request',
									items: [
										{
											xtype: 'container',
											items: [
												{
													xtype: 'checkbox',
													fieldLabel: 'Ignore Weekends',
													value: true
												},
												{
													xtype: 'datefield',
													fieldLabel: 'Start Date'
												},
												{
													xtype: 'datefield',
													fieldLabel: 'End Date'
												},
												{
													xtype: 'combobox',
													fieldLabel: 'Type',
													store: 'Shared.store.requestTypes',
													displayField: 'name'
												},
												{
													xtype: 'numberfield',
													fieldLabel: 'Daily Input',
													maxValue: 12,
													minValue: 1,
													decimalPrecision: 0
												},
												{
													xtype: 'textareafield',
													width: '100%',
													fieldLabel: 'Notes'
												}
											]
										}
									],
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
													text: 'Delete'
												},
												{
													xtype: 'button',
													text: 'Submit'
												}
											]
										}
									]
								}
							]
						},
						{
							xtype: 'ptocalendar',
							region: 'center',
							columnLines: true,
							border: false,
							store: 'Shared.store.requests',
							dockedItems: [
								{
									xtype: 'ptosimple'
								}
							]
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
				}
			]
		}
	]

});