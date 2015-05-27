Ext.define('MyApp.store.Sites', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Sites',
			data: [
				{ name: 'All' },
				{ name: 'Jacksonville' },
				{ name: 'Charlotte' },
				{ name: 'Ft. Payne' }
			],
			fields: [
				['name']
			]
		}, cfg)]);
	}
});