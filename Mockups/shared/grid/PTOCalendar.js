Ext.define('Shared.grid.PTOCalendar', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.ptocalendar',

	selModel: {
		selType: 'cellmodel'
	},

	columns: [
		{
			xtype: 'numbercolumn',
			width: 30,
			dataIndex: 'week',
			text: '...',
			format: '0,000'
		},
		{
			xtype: 'gridcolumn',
			renderer: window.renderCell(0),
			dataIndex: 'mon',
			text: 'Mon',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.renderCell(1),
			dataIndex: 'tue',
			text: 'Tue',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.renderCell(2),
			dataIndex: 'wed',
			text: 'Wed',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.renderCell(3),
			dataIndex: 'thu',
			text: 'Thu',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.renderCell(4),
			dataIndex: 'fri',
			text: 'Fri',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.renderCell(5),
			dataIndex: 'sat',
			text: 'Sat',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.renderCell(6),
			dataIndex: 'sun',
			text: 'Sun',
			flex: 1
		}
	]
});