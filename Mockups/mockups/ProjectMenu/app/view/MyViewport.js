Ext.define('MyApp.view.MyViewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.myviewport',
	layout: 'fit',

	requires: [
		'MyApp.panel.Main'
	],

	items: [
		{
			xtype: 'tabpanel',
			items: [
				{
					xtype: 'main',
					title: 'Project Module',
					border: false
				}
			]
		}
	]
});