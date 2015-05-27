Ext.define('MyApp.panel.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.main',
	controller: 'mycontroller',

	requires: [
		'MyApp.panel.Shell',
		'MyApp.controller.MyController'
	],

	layout: 'border',

	tbar: [
		{
			text: 'Save'
		},
		{
			text: 'Cancel'
		}
	],

	items: [
		{
			title: 'Menu',
			xtype: 'treepanel',
			region: 'west',
			width: 200,
			store: 'MenuLinks',
			border: false,
			split: true,
			rootVisible: false,
			collapsible: true,
			listeners: {
				select: 'onSelect'
			}
		},
		{
			reference: 'Shell',
			title: 'Project Details',
			xtype: 'Shell',
			region: 'center',
			border: false
		}
	]
});
