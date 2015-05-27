Ext.define('MyApp.grid.IOResults', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.ioresults',

	selModel: {
		selType: 'cellmodel'
	},

	columns: [
		{
			xtype: 'gridcolumn',
			dataIndex: 'name',
			text: 'Name',
			flex: 1
		},
		{
			xtype: 'numbercolumn',
			dataIndex: 'bank',
			text: 'Bank',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'mon',
			text: '8/1',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'tues',
			text: '8/2',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'wed',
			text: '8/3',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'thur',
			text: '8/4',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'fri',
			text: '8/5',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'mon',
			text: '8/6',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'tues',
			text: '8/7',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'wed',
			text: '8/8',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'thur',
			text: '8/9',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			renderer: window.cellRender,
			dataIndex: 'fri',
			text: '8/10',
			flex: 1
		}
	]
});