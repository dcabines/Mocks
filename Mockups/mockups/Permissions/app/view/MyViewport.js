Ext.define('MyApp.view.MyViewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.myviewport',
	controller: 'mycontroller',
	layout: 'fit',

	requires: [
		'MyApp.controller.MyController'
	],

	viewModel: {
		formulas: {
			showDetails: function (get) {
				return get('detailsButton.pressed') && get('peopleGrid.selection');
			}
		},

		data: {
			peopleDialog: Ext.create({
				xtype: 'window',
				title: 'People Search',
				width: 300,
				closeAction: 'hide',

				defaults:{
					border: false
				},

				layout: {
					type: 'vbox',
					align: 'stretch'
				},

				buttons: [
					{
						text: 'Close',
						handler: function () {
							this.up('window').close();
						}
					}
				],

				items: [
					{
						layout: 'form',

						bodyStyle: {
							background: '#dfe8f6'
						},

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
								xtype: 'textfield',
								fieldLabel: 'GID'
							}
						],

						buttons: [
							{
								text: 'Search'
							}
						]
					},
					{
						xtype: 'grid',
						height: 200,

						viewConfig: {
							plugins: {
								ptype: 'gridviewdragdrop',
								dragGroup: 'secondGridDDGroup'
							}
						},

						columns: [
							{
								text: 'First Name',
								dataIndex: 'firstName'
							},
							{
								text: 'Last Name',
								dataIndex: 'lastName'
							},
							{
								text: 'GID',
								dataIndex: 'gid'
							},
							{
								text: 'Org Code',
								dataIndex: 'org'
							}
						],

						store: {
							fields: ['firstName', 'lastName', 'gid', 'org'],
							data: [
								{ firstName: 'Krista', lastName: 'Jquay', gid: '123', org: 'abc' },
								{ firstName: 'Donna', lastName: 'Cook', gid: '123', org: 'abc' },
								{ firstName: 'Chuck', lastName: 'Waxter', gid: '123', org: 'abc' },
								{ firstName: 'Allan', lastName: 'Palms', gid: '123', org: 'abc' },
							]
						}
					}
				]
			}),

			permissionDialog: Ext.create({
				xtype: 'window',
				title: 'Permission Search',
				width: 300,
				closeAction: 'hide',

				defaults: {
					border: false
				},

				layout: {
					type: 'vbox',
					align: 'stretch'
				},

				buttons: [
					{
						text: 'Close',
						handler: function () {
							this.up('window').close();
						}
					}
				],

				items: [
					{
						layout: 'form',

						bodyStyle: {
							background: '#dfe8f6'
						},

						items: [
							{
								xtype: 'textfield',
								fieldLabel: 'Name'
							},
							{
								xtype: 'combobox',
								fieldLabel: 'Type',
								displayField: 'name',
								valueField: 'name',
								mode: 'local',
								lastQuery: '',
								triggerAction: 'all',
								store: {
									fields: ['name'],
									data: [
										{ name: 'config' },
										{ name: 'reports' },
										{ name: 'forms' },
										{ name: 'roles' }
									]
								}
							}
						],

						buttons: [
							{
								text: 'Search'
							}
						]
					},
					{
						xtype: 'treepanel',
						flex: 1,

						listeners: {
							beforedrop: 'onBeforeDrop'
						},

						viewConfig: {
							plugins: {
								ptype: 'treeviewdragdrop',
								appendOnly: true
							}
						},

						bind: {
							store: '{results}'
						}
					}
				]
			})
		},

		stores: {
			details: {
				type: 'tree',
				rootVisible: true,
				root: {
					text: 'Permissions',
					expanded: true,
					children: [
						{
							text: 'forms',
							expanded: true,
							children: [
								{ text: 'time_020', leaf: true },
								{ text: 'exp_001', leaf: true }
							]
						},
						{
							text: 'reports',
							expanded: true,
							children: [
								{ text: 'PTO EE Report', leaf: true },
								{ text: 'Admin PTO Report', leaf: true }
							]
						},
						{
							text: 'roles',
							expanded: true,
							children: [
								{ text: 'Time Approver', leaf: true },
								{ text: 'PTO OBO', leaf: true }
							]
						},
						{
							text: 'config',
							expanded: true,
							children: [
								{ text: 'General Data Maintenance', leaf: true },
								{ text: 'MySPGI Product Line', leaf: true },
								{ text: 'Shanghai', leaf: true }
							]
						}
					]
				}
			},

			results: {
				type: 'tree',
				rootVisible: true,
				root: {
					text: 'Permissions',
					expanded: true,
					children: [
						{
							text: 'config',
							expanded: true,
							children: [
							  { text: 'General Data Maintenance', leaf: true },
							  { text: 'MySPGI Product Line', leaf: true },
							  { text: 'Shanghai', leaf: true }
							]
						}
					]
				}
			},

			assign: {
				type: 'tree',
				rootVisible: true,
				root: {
					text: 'Permissions',
					expanded: true,
					children: [
						{
							text: 'config',
							expanded: true,
							children: [
							  { text: 'Shanghai', leaf: true }
							]
						}
					]
				}
			},

			remove: {
				type: 'tree',
				rootVisible: true,
				root: {
					text: 'Permissions',
					expanded: true,
					children: [
						{
							text: 'roles',
							expanded: true,
							children: [
								{ text: 'PTO OBO', leaf: true }
							]
						},
					]
				}
			}
		}
	},

	items: [
		{
			border: false,
			layout: 'border',

			defaults: {
				border: false
			},

			tbar: [
				{
					text: 'People',
					handler: 'onPeopleClick'
				},
				{
					text: 'Permissions',
					handler: 'onPermissionsClick'
				},
				'-',
				{
					reference: 'detailsButton',
					text: 'Details',
					enableToggle: true,
					disabled: true,
					pressed: true,
					bind: {
						disabled: '{!peopleGrid.selection}',
						pressed: '{peopleGrid.selection}'
					}
				},
				'-',
				{
					text: 'Save',
					handler: 'onSaveClick'
				},
				{
					text: 'Cancel',
					handler: 'onCancelClick'
				}
			],

			items: [
				{
					reference: 'peopleGrid',
					xtype: 'grid',
					region: 'center',

					viewConfig: {
						plugins: {
							ptype: 'gridviewdragdrop',
							dropGroup: 'secondGridDDGroup'
						}
					},

					store: {
						fields: ['firstName', 'lastName', 'gid', 'org'],
						data: [
							{ firstName: 'David', lastName: 'Cabin', gid: '123', org: 'abc' },
							{ firstName: 'Matt', lastName: 'Milli', gid: '123', org: 'abc' },
							{ firstName: 'Russell', lastName: 'London', gid: '123', org: 'abc' },
							{ firstName: 'Jignesh', lastName: 'Tanker', gid: '123', org: 'abc' },
							{ firstName: 'Hima', lastName: 'Akka', gid: '123', org: 'abc' },
							{ firstName: 'Robert', lastName: 'Disaronno', gid: '123', org: 'abc' },
							{ firstName: 'Curtis', lastName: 'Balthazar', gid: '123', org: 'abc' }
						]
					},

					columns: [
						{
							xtype: 'actioncolumn',
							width: 50,
							items: [
								{
									icon: '/images/icon-delete.png',
									tooltip: 'Remove',
									handler: 'onRemoveClick'
								}
							]
						},
						{
							text: 'First Name',
							dataIndex: 'firstName'
						},
						{
							text: 'Last Name',
							dataIndex: 'lastName'
						},
						{
							text: 'GID',
							dataIndex: 'gid'
						},
						{
							text: 'Org Code',
							dataIndex: 'org'
						}
					]
				},
				{
					xtype: 'treepanel',
					title: 'Details',
					region: 'east',
					split: true,
					width: 200,
					collapsible: true,
					collapsed: true,
					hideCollapseTool: true,

					viewConfig: {
						plugins: {
							ptype: 'treeviewdragdrop',
							appendOnly: true
						},

						listeners: {
							beforedrop: 'onBeforeDrop'
						}
					},

					bind: {
						collapsed: '{!showDetails}',
						store: '{details}'
					}
				},
				{
					xtype: 'container',
					region: 'south',
					split: true,
					height: 200,

					layout: {
						type: 'hbox',
						align: 'stretch'
					},

					items: [
						{
							title: 'Assign Permissions',
							xtype: 'treepanel',
							flex: 1,

							viewConfig: {
								plugins: {
									ptype: 'treeviewdragdrop',
									appendOnly: true
								},

								listeners: {
									beforedrop: 'onBeforeDrop'
								}
							},

							bind: {
								store: '{assign}'
							}
						},
						{
							title: 'Remove Permissions',
							xtype: 'treepanel',
							flex: 1,

							viewConfig: {
								plugins: {
									ptype: 'treeviewdragdrop',
									appendOnly: true
								},

								listeners: {
									beforedrop: 'onBeforeDrop'
								}
							},

							bind: {
								store: '{remove}'
							}
						}
					]
				}
			]
		}
	]
});