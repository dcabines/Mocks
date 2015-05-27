Ext.define('MyApp.panel.Shell', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.shell',
	autoScroll: true,

	items: [
		{
			xtype: 'container',
			html: 'Select an item from the menu.'
		}
	]
});
