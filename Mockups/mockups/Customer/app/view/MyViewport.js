Ext.define('MyApp.view.MyViewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.myviewport',

	layout: 'fit',

	items: [
		{
			xtype: 'tabpanel',
			items: [
				{
					xtype: 'panel',
					border: false,
					layout: 'border',
					title: 'PTO Administration',
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
								},
								{
									xtype: 'button',
									handler: function (button, e) {
										var details = this.up('panel').down('panel[title=Details]');
										details.toggleCollapse();
									},
									text: 'Details'
								}
							]
						}
					],
					items: [
						{
							xtype: 'form',
							region: 'north',
							border: false,
							bodyPadding: 10,
							bodyStyle: {
								background: '#DFE8F6'
							},
							layout: {
								type: 'hbox',
								align: 'stretch'
							},
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
													fieldLabel: 'First Name'
												},
												{
													xtype: 'textfield',
													fieldLabel: 'Last Name'
												},
												{
													xtype: 'combobox',
													fieldLabel: 'Target System',
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
													xtype: 'textfield',
													fieldLabel: 'Manager'
												},
												{
													xtype: 'textfield',
													fieldLabel: 'Approver'
												},
												{
													xtype: 'textfield',
													fieldLabel: 'Org Code'
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
													fieldLabel: 'GID'
												},
												{
													xtype: 'textfield',
													fieldLabel: 'SAP ID'
												},
												{
													xtype: 'textfield',
													fieldLabel: 'HR ID'
												}
											]
										}
									]
								}
							],
							dockedItems: [
								{
									xtype: 'toolbar',
									flex: 1,
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
							]
						},
						{
							xtype: 'gridpanel',
							cls: 'gridCss',
							region: 'center',
							border: false,
							store: 'Shared.store.SearchResults',
							columns: [
								{
									xtype: 'gridcolumn',
									dataIndex: 'name',
									text: 'Employee Name',
									flex: 1
								},
								{
									xtype: 'numbercolumn',
									dataIndex: 'baseRate',
									text: 'Base Rate',
									align: 'right',
									flex: 1
								},
								{
									xtype: 'numbercolumn',
									dataIndex: 'bank',
									text: 'Bank',
									align: 'right',
									flex: 1
								},
								{
									xtype: 'numbercolumn',
									dataIndex: 'additionalRate',
									text: 'Additional Rate',
									align: 'right',
									flex: 1
								},
								{
									xtype: 'numbercolumn',
									dataIndex: 'carryOver',
									text: 'Carry Over Max',
									align: 'right',
									flex: 1,
									format: '0,000'
								}
							]
						},
						{
							xtype: 'tabpanel',
							floatable: false,
							region: 'south',
							split: true,
							border: false,
							height: 300,
							collapsed: true,
							collapsible: true,
							title: 'Details',
							items: [
								{
									xtype: 'gridpanel',
									cls: 'gridCss',
									border: false,
									title: 'History',
									store: 'Shared.store.History',
									columns: [
										{
											xtype: 'actioncolumn',
											width: 50,
											align: 'center',
											items: [{
												tooltip: 'Notes',
												icon: '/images/note.png'
											}]
										},
										{
											xtype: 'gridcolumn',
											dataIndex: 'value',
											text: 'Trans ID',
											flex: 1
										},
										{
											xtype: 'gridcolumn',
											dataIndex: 'admin',
											text: 'Name',
											flex: 1
										},
										{
											xtype: 'gridcolumn',
											dataIndex: 'action',
											text: 'Event',
											flex: 1
										},
										{
											xtype: 'datecolumn',
											dataIndex: 'date',
											text: 'Date',
											flex: 1
										},
										{
											xtype: 'numbercolumn',
											dataIndex: 'value',
											text: 'Previous Value',
											align: 'right',
											flex: 1
										},
										{
											xtype: 'numbercolumn',
											dataIndex: 'value',
											text: 'Adjustment',
											align: 'right',
											flex: 1
										},
										{
											xtype: 'numbercolumn',
											dataIndex: 'value',
											text: 'Value',
											align: 'right',
											flex: 1
										}
									]
								},
								{
									xtype: 'panel',
									border: false,
									title: 'Requests',
									layout: {
										type: 'hbox',
										align: 'stretch'
									},
									items: [
										{
											xtype: 'gridpanel',
											cls: 'gridCss',
											store: 'Requests',
											width: 100,
											title: 'Requests',
											columns: [
												{
													xtype: 'datecolumn',
													text: 'Start Date',
													dataIndex: 'request',
													flex: 1
												}
											]
										},
										{
											xtype: 'gridpanel',
											cls: 'gridCss',
											title: 'Request Workflow',
											store: 'Workflow',
											flex: 1,
											columns: [
												{
													xtype: 'actioncolumn',
													width: 50,
													align: 'center',
													items: [{
														tooltip: 'Notes',
														icon: '/images/note.png'
													}]
												},
												{
													xtype: 'gridcolumn',
													text: 'Trans ID',
													dataIndex: 'id',
													flex: 1
												},
												{
													xtype: 'gridcolumn',
													text: 'Name',
													dataIndex: 'name',
													flex: 1
												},
												{
													xtype: 'gridcolumn',
													text: 'Event',
													dataIndex: 'event',
													flex: 1
												},
												{
													xtype: 'gridcolumn',
													text: 'Routing Rule',
													dataIndex: 'rule',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													text: 'Step',
													dataIndex: 'step',
													format: '0,000',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													text: 'Priority',
													dataIndex: 'priority',
													format: '0,000',
													flex: 1
												},
												{
													xtype: 'datecolumn',
													text: 'Created Time',
													dataIndex: 'created',
													flex: 1
												}
											]
										}
									]
								},
								{
									xtype: 'panel',
									border: false,
									bodyStyle: {
										background: '#DFE8F6'
									},
									title: 'Information',
									layout: {
										type: 'hbox',
										align: 'stretch'
									},
									dockedItems: [
										{
											xtype: 'toolbar',
											flex: 1,
											dock: 'top',
											items: [
												{
													xtype: 'combobox',
													displayField: 'year',
													store: 'Years',
													valueField: 'year',
													value: 2014,
													width: 70
												},
												{
													xtype: 'button',
													text: 'Search'
												}
											]
										}
									],
									items: [
										{
											xtype: 'propertygrid',
											width: 300,
											columnLines: false,
											disableSelection: true,
											source: {
												'Service Date': '1/1/2001',
												'Base Rate': '16.67',
												'Additional Rate': '0',
												'Max Carry Over': '40',
												'Org Code': 'E S SR WP AM BP',
												'Floating Holidays': 3,
												'Weekly Hours': '40',
												Tenure: '13y 8m',
												Type: 'Full Time',
												Bank: '240.81',
												Manager: 'May Lou',
												Approver: 'May Lou'
											},
											listeners: {
												beforeedit: 'cancelEdit'
											},
											cancelEdit: function () {
												return false;
											}
										},
										{
											xtype: 'panel',
											title: '2014 Summary',
											layout: 'form',
											width: 200,
											items: [
												{
													xtype: 'displayfield',
													fieldLabel: 'Carry Over',
													value: 40
												},
												{
													xtype: 'displayfield',
													fieldLabel: 'Additional Bank',
													value: 10
												},
												{
													xtype: 'displayfield',
													fieldLabel: 'Hours Accrued',
													value: 123
												},
												{
													xtype: 'displayfield',
													fieldLabel: 'Hours Requested',
													value: 123
												},
												{
													xtype: 'displayfield',
													fieldLabel: 'Hours Taken',
													value: 123
												}
											]
										},
										{
											xtype: 'gridpanel',
											cls: 'gridCss',
											flex: 1,
											title: 'Monthly Summary',
											store: 'Summary',
											columns: [
												{
													xtype: 'gridcolumn',
													dataIndex: 'month',
													text: 'Month',
													flex: 1
												},
												{
													xtype: 'gridcolumn',
													dataIndex: 'tenure',
													text: 'Tenure',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													dataIndex: 'rate',
													text: 'Accrual Rate',
													align: 'right',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													dataIndex: 'rate',
													text: 'Additional Accrual Rate',
													align: 'right',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													dataIndex: 'bank',
													text: 'Bank',
													align: 'right',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													dataIndex: 'bank',
													text: 'Additional Bank',
													align: 'right',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													dataIndex: 'requested',
													text: 'Requested',
													align: 'right',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													dataIndex: 'spent',
													text: 'Taken',
													align: 'right',
													flex: 1
												}
											]
										}
									]
								},
								{
									xtype: 'panel',
									bodyStyle: {
										background: '#dfe8f6;'
									},
									title: 'Adjustments',
									layout: {
										type: 'hbox',
										align: 'stretch'
									},
									items: [
										{
											xtype: 'form',
											bodyPadding: 10,
											bodyStyle: 'background:#dfe8f6;',
											title: 'One Time',
											layout: {
												type: 'hbox',
												align: 'stretch'
											},
											dockedItems: [
												{
													xtype: 'toolbar',
													flex: 1,
													dock: 'top',
													items: [
														{
															xtype: 'button',
															handler: function (button, e) {
																Ext.create('MyApp.view.Confirm').show();
															},
															text: 'Save'
														},
														{
															xtype: 'button',
															text: 'Cancel'
														}
													]
												}
											],
											items: [
												{
													xtype: 'container',
													layout: 'form',
													items: [
														{
															xtype: 'datefield',
															fieldLabel: 'Effective Date',
															minValue: new Date()
														},
														{
															xtype: 'numberfield',
															fieldLabel: 'Bank'
														},
														{
															xtype: 'textarea',
															fieldLabel: 'Notes'
														}
													]
												}
											]
										},
										{
											xtype: 'gridpanel',
											cls: 'gridCss',
											flex: 1,
											height: 150,
											collapsible: true,
											title: 'Recurring',
											store: 'Adjustments',
											dockedItems: [
												{
													xtype: 'toolbar',
													flex: 1,
													dock: 'top',
													items: [
														{
															xtype: 'button',
															handler: function (button, e) {
																Ext.create('MyApp.view.Confirm').show();
															},
															text: 'Save'
														},
														{
															xtype: 'button',
															text: 'Cancel'
														}
													]
												}
											],
											columns: [
												{
													xtype: 'actioncolumn',
													width: 50,
													align: 'center',
													items: [
														{
															icon: '/build/development/MyApp/resources/images/window/toast/icon16_error.png'
														}
													]
												},
												{
													xtype: 'datecolumn',
													dataIndex: 'date',
													text: 'Effective Date',
													flex: 1,
													editor: {
														xtype: 'datefield',
														minValue: '09/12/2014'
													}
												},
												{
													xtype: 'gridcolumn',
													dataIndex: 'type',
													text: 'Type',
													flex: 1,
													editor: {
														xtype: 'combobox',
														displayField: 'name',
														store: 'AdjustmentTypes',
														valueField: 'name'
													}
												},
												{
													xtype: 'gridcolumn',
													dataIndex: 'frequency',
													text: 'Frequency',
													flex: 1
												},
												{
													xtype: 'numbercolumn',
													dataIndex: 'adjustment',
													text: 'Value',
													align: 'right',
													flex: 1,
													editor: {
														xtype: 'numberfield'
													}
												},
												{
													// this is for data entry only
													xtype: 'gridcolumn',
													text: 'Note',
													flex: 1,
													editor: {
														xtype: 'textfield'
													}
												}
											],
											selModel: {
												selType: 'cellmodel'
											},
											plugins: [
												{
													ptype: 'cellediting',
													clicksToEdit: 1
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
});