Ext.define('MyApp.store.Systems', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Systems',
			data: [
				{ name: 'PD2' },
				{ name: 'NCL' }
			],
			fields: ['name']
		}, cfg)]);
	}
});