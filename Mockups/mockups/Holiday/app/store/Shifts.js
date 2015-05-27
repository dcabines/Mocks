Ext.define('MyApp.store.Shifts', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Shifts',
			data: [
				{ name: 'All', calendar: 'Standard' },
				{ name: 'Day', calendar: 'Not Standard' },
				{ name: 'Night', calendar: 'Other' },
			],
			fields: ['name', 'calendar']
		}, cfg)]);
	}
});