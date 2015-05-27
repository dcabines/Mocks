Ext.define('MyApp.panel.Shell', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.shell',
	autoScroll: true,

	requires: [
		'MyApp.store.Sample'
	],

	items: [
		{
			xtype: 'sample',
			border: false,
			store: Ext.create('MyApp.store.Sample')
		}
	]
});
