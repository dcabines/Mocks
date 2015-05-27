Ext.define('MyApp.store.Holidays', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Holidays',
			data: [
				{ name: 'Christmas', date: new Date() },
				{ name: 'Halloween', date: new Date() }
			],
			fields: [
				{ name: 'name', type: 'string' },
				{ name: 'date', type: 'date' }
			]
		}, cfg)]);
	}
});