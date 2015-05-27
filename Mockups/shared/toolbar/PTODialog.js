Ext.define('Shared.toolbar.PTODialog', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.ptodialog',

	dock: 'top',

	items: [
		{
			xtype: 'button',
			text: 'New Hourly Request',
			handler: function () {
				Ext.create('MyApp.view.Hourly').show();
			}
		},
		{
			xtype: 'button',
			text: 'New Salary Request',
			handler: function () {
				Ext.create('MyApp.view.Salary').show();
			}
		},
		{
			xtype: 'button',
			text: '<-'
		},
		{
			xtype: 'button',
			text: '->'
		},
		{
			xtype: 'datefield',
			value: '08/29/2014'
		},
		{
			xtype: 'tbtext',
			text: 'Mon, 18-Aug-2014 - Sun, 28-Sep-2014'
		},
		{
			xtype: 'tbspacer',
			flex: 1
		},
		{
			xtype: 'button',
			text: 'PTO Manager Report'
		},
		{
			xtype: 'button',
			text: 'PTO Report'
		}
	]
});