Ext.define('MyApp.store.AdjustmentFrequency', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'AdjustmentFrequency',
			data: [
				{
					name: 'One Time'
				},
				{
					name: 'Anually'
				}
			],
			fields: [
				{
					type: 'string',
					name: 'name'
				}
			]
		}, cfg)]);
	}
});