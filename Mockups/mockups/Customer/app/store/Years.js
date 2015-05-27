Ext.define('MyApp.store.Years', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Years',
			data: [
				{
					year: 2014
				},
				{
					year: 2015
				},
				{
					year: 2016
				}
			],
			fields: [
				{
					type: 'int',
					name: 'year'
				}
			]
		}, cfg)]);
	}
});