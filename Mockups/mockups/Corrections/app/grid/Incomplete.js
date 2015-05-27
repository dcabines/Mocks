Ext.define('MyApp.grid.Incomplete', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.incomplete',

	tbar: [
		{
			text: 'Save'
		},
		{
			text: 'Cancel'
		},
		'-',
		'',
		{
			xtype: 'datefield',
			value: lastMonth,
			width: 100
		},
		{
			xtype: 'tbtext',
			text: '-'
		},
		{
			xtype: 'datefield',
			value: today,
			width: 100
		},
		{
			text: 'Search'
		}
	],

	plugins: [{
		ptype: 'cellediting',
		clicksToEdit: 1
	}],

	columns: [
		{
			text: 'GID',
			dataIndex: 'gid'
		},
		{
			text: 'Name',
			dataIndex: 'name',
			flex: 1
		},
		{
			text: 'Time In',
			dataIndex: 'tin',
			flex: 1,
			editor: {
				editable: false,
				xtype: 'combobox',
				store: 'Punches',
				displayField: 'time'
			}
		},
		{
			text: 'Time Out',
			dataIndex: 'tout',
			flex: 1,
			editor: {
				editable: false,
				xtype: 'combobox',
				store: 'Punches',
				displayField: 'time'
			}
		},
		{
			text: 'Shift',
			dataIndex: 'shift',
			flex: 1
		}
	]
});