Ext.define('MyApp.controller.MyController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mycontroller',

	requires: ['MyApp.grid.Rates'],

	onSelect: function (tree, record) {
		var shell = this.lookupReference('Shell');
		var title = record.get('text');
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