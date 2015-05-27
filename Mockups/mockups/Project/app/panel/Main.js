Ext.define('MyApp.panel.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.main',
	controller: 'mycontroller',

	requires: [
		'MyApp.grid.Sample',
		'MyApp.grid.Rates',
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
			reference: 'shell',
			title: 'Project Details',
			xtype: 'shell',
			region: 'center',
			border: false
		}
	]
});
