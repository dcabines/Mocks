Ext.define('MyApp.panel.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.main',

	layout: 'border',

	items: [
		{
			region: 'center',
			border: false,

			layout: {
				type: 'hbox',
				align: 'stretch'
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
						}
					]
				}
			],

			items: [
				{
					xtype: 'grid',
					title: 'Target Systems',
					store: 'Systems',
					width: 110,
					columns: [
						{
							text: 'Target System',
							dataIndex: 'name',
							flex: 1
						}
					]
				},
				{
					xtype: 'grid',
					title: 'Calendars',
					width: 200,
					store: 'Calendars',
					selType: 'cellmodel',
					plugins: {
						ptype: 'cellediting',
						clicksToEdit: 2
					},
					dockedItems: [
						{
							xtype: 'toolbar',
							dock: 'top',
							items: [
								{
									text: 'Add'
								},
								{
									text: 'Copy'
								},
								{
									text: 'Remove'
								}
							]
						}
					],
					columns: [
						{
							text: 'Name',
							dataIndex: 'name',
							flex: 1,
							editor: {
								xtype: 'textfield'
							}
						}
					]
				},
				{
					xtype: 'grid',
					title: 'Holidays',
					store: 'Holidays',
					flex: 1,
					selType: 'cellmodel',
					plugins: {
						ptype: 'cellediting',
						clicksToEdit: 2
					},
					dockedItems: [
						{
							xtype: 'toolbar',
							dock: 'top',
							items: [
								{
									text: 'Add'
								},
								{
									text: 'Remove'
								}
							]
						}
					],
					columns: [
						{
							xtype: 'datecolumn',
							text: 'Date',
							dataIndex: 'date',
							editor: {
								xtype: 'datefield'
							}
						},
						{
							text: 'Name',
							dataIndex: 'name',
							flex: 1,
							editor: {
								xtype: 'textfield'
							}
						}
					]
				}
			]
		},
		{
			border: false,
			region: 'south',
			split: {
				size: 10
			},
			height: 300,

			layout: {
				type: 'hbox',
				align: 'stretch'
			},

			items: [
				{
					title: 'Assign Calendars to Sites',
					flex:1,
					layout: {
						type: 'hbox',
						align: 'stretch'
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
								}
							]
						}
					],

					items: [
						{
							xtype: 'grid',
							title: 'Target Systems',
							store: 'Systems',
							width: 110,
							columns: [
								{
									text: 'Target System',
									dataIndex: 'name',
									flex: 1
								}
							]
						},
						{
							xtype: 'grid',
							title: 'Sites',
							store: 'Sites',
							width: 110,
							columns: [
								{
									text: 'Site',
									dataIndex: 'name',
									flex: 1
								}
							]
						},
						{
							xtype: 'grid',
							title: 'Shifts',
							store: 'Shifts',
							flex: 1,
							selType: 'cellmodel',
							plugins: {
								ptype: 'cellediting',
								clicksToEdit: 2
							},
							columns: [
								{
									text: 'Shift',
									dataIndex: 'name',
									flex: 1,
									editor: {
										xtype: 'textfield'
									}
								},
								{
									text: 'Calendar',
									dataIndex: 'calendar',
									flex: 1,
									editor: {
										xtype: 'combobox'
									}
								}
							]
						}
					],
				},
				{
					xtype: 'grid',
					title: 'Override Employee Calendars',
					store: 'Employees',
					flex: 2,
					selType: 'cellmodel',
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
								{
									text: 'Add'
								},
								{
									text: 'Remove'
								}
							]
						}
					],
					plugins: {
						ptype: 'cellediting',
						clicksToEdit: 2
					},
					columns: [
						{
							text: 'GID',
							dataIndex: 'gid'
						},
						{
							text: 'Shift',
							dataIndex: 'shift'
						},
						{
							text: 'Name',
							dataIndex: 'name',
							flex: 1
						},
						{
							text: 'Calendar',
							dataIndex: 'calendar',
							flex: 1,
							editor: {
								xtype: 'combobox'
							}
						}
					]
				}
			]
		}
	]
});
