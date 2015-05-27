Ext.define('MyApp.panel.Shell', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.Shell',
	autoScroll: true,

	requires: [
		'MyApp.grid.Sample'
	],

	defaults: {
		border: false
	},

	items: [
		{
			xtype: 'Sample',
			store: 'Sample'
		}
	]
});
