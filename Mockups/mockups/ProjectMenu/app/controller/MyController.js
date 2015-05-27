Ext.define('MyApp.controller.MyController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mycontroller',

	requires: ['MyApp.grid.Rates'],

	onSelect: function (menu) {
		var shell = this.lookupReference('shell');
		var title = menu.text;
		var header = shell.getHeader();
		var xtype = title == 'Rates Setup' ? 'Rates' : 'Sample';
		var store = Ext.StoreManager.lookup(xtype);

		if (store.refresh) {
			store.refresh();
		}
		var component = Ext.create({
			xtype: xtype,
			store: store
		});

		shell.removeAll();
		shell.add(component);
		header.setTitle(title);
	}
});