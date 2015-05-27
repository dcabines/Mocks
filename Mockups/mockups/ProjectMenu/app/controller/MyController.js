Ext.define('MyApp.controller.MyController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mycontroller',

	requires: [
		'MyApp.store.Sample',
		'MyApp.store.Rates'
	],

	onSelect: function (menu) {
		var shell = this.lookupReference('shell');
		var title = menu.text;
		var header = shell.getHeader();
		var component = Ext.create({
			xtype: title == 'Rates Setup' ? 'rates' : 'sample',
			border: false,
			store: Ext.create(title == 'Rates Setup' ? 'MyApp.store.Rates' : 'MyApp.store.Sample')
		});

		shell.removeAll();
		shell.add(component);
		header.setTitle(title);
	}
});