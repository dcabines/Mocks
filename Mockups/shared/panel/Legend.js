Ext.define('Shared.panel.Legend', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.legend',

	bodyStyle: {
		background: '#DFE8F6'
	},

	title: 'Legend',

	items: [
		{
			xtype: 'label',
			cls: 'approved',
			padding: 10,
			style: 'display:block;',
			text: 'Approved'
		},
		{
			xtype: 'label',
			cls: 'rejected',
			padding: 10,
			style: 'display:block;',
			text: 'Rejected'
		},
		{
			xtype: 'label',
			cls: 'past',
			padding: 10,
			style: 'display:block;',
			text: 'Past'
		},
		{
			xtype: 'label',
			cls: 'pending',
			padding: 10,
			style: 'display:block;',
			text: 'Pending'
		}
	]
});