Ext.define('MyApp.panel.RequestInfo', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.requestInfo',

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	items: [
		{
			xtype: 'container',
			flex: 1,
			style: 'background:#DFE8F6;',
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'container',
					flex: 1,
					layout: 'form',
					items: [
						{
							xtype: 'displayfield',
							fieldLabel: 'Name',
							value: 'Bob Dobbs'
						},
						{
							xtype: 'displayfield',
							fieldLabel: 'Requested',
							value: '6/1/2014'
						},
						{
							xtype: 'displayfield',
							fieldLabel: 'Type',
							value: 'PTO'
						}
					]
				},
				{
					xtype: 'container',
					flex: 1,
					layout: 'form',
					items: [
						{
							xtype: 'displayfield',
							fieldLabel: 'Start',
							value: '8/1/2014'
						},
						{
							xtype: 'displayfield',
							fieldLabel: 'End',
							value: '9/1/2014'
						},
						{
							xtype: 'displayfield',
							fieldLabel: 'Total hours',
							value: '123'
						}
					]
				}
			]
		},
		{
			xtype: 'gridpanel',
			flex: 1,
			title: 'Other Requests Overlapping This Request',
			store: 'overlappingRequests',
			columns: [
				{
					xtype: 'gridcolumn',
					dataIndex: 'name',
					text: 'Name',
					flex: 1
				},
				{
					xtype: 'datecolumn',
					dataIndex: 'requested',
					text: 'Requested',
					flex: 1
				},
				{
					xtype: 'datecolumn',
					dataIndex: 'start',
					text: 'Start',
					flex: 1
				},
				{
					xtype: 'datecolumn',
					dataIndex: 'end',
					text: 'End',
					flex: 1
				}
			]
		}
	]
});