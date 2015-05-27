Ext.define('MyApp.grid.History', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.history',

	tbar: [
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
		ptype: 'rowexpander',
		rowBodyTpl: new Ext.XTemplate(
			'<table class="table">',
			'<thead><tr>',
			'<th>Time</th>',
			'<th>Location</th>',
			'<th>Reason Code</th>',
			'<th>Approved</th>',
			'</tr></thead>',
			'<tbody>',

			'<tr class="x-grid-row">',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner">{tin}</div>',
			'</td>',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner">{location}</div>',
			'</td>',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner">{activity}</div>',
			'</td>',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner">Yes</div>',
			'</td>',

			'</tr>',

			'<tr class="x-grid-row">',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner">{tout}</div>',
			'</td>',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner">{location}</div>',
			'</td>',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner">{activity}</div>',
			'</td>',

			'<td class="x-grid-cell x-grid-td">',
			'<div class="x-grid-cell-inner"></div>',
			'</td>',

			'</tr>',

			'</tbody>',
			'</table>')
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