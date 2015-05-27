Ext.define('MyApp.view.MyViewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.myviewport',

	requires: [
		'MyApp.panel.Main'
	],

	layout: 'fit',

	items: [
		{
			xtype: 'tabpanel',
			items: [
				{
					xtype: 'main',
					title: 'Admin Delegate',
					border: false
				}
			]
		}
	]
});