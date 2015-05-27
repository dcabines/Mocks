Ext.define('MyApp.view.MyViewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.myviewport',

	requires: [
		'MyApp.panel.ApprovalList',
		'MyApp.panel.InOut'
	],

	layout: 'fit',

	items: [
		{
			xtype: 'tabpanel',
			items: [
				{
					xtype: 'approvalList',
					title: 'Approval List',
					border: false
				},
				{
					xtype: 'inout',
					title: 'In / Out',
					border: false
				}
			]
		}
	]
});