Ext.define('MyApp.store.Calendars', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Calendars',
			data: [
				{ name: 'Standard Holiday Schedule' },
				{ name: 'Non Standard Holiday Schedule' }
			],
			fields: ['name']
		}, cfg)]);
	}
});