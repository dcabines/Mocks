Ext.define('MyApp.grid.History', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.history',

	columns: [
		{
			xtype: 'gridcolumn',
			dataIndex: 'action',
			text: 'Action',
			flex: 1
		},
		{
			xtype: 'numbercolumn',
			dataIndex: 'value',
			text: 'Value',
			flex: 1
		},
		{
			xtype: 'datecolumn',
			dataIndex: 'date',
			text: 'Date',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'admin',
			text: 'Admin',
			flex: 1
		}
	]
});