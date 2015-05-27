Ext.define('Shared.store.requestTypes', {
	extend: 'Ext.data.Store',

	constructor: function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'requestTypes',
			data: [
				{
					name: 'PTO'
				},
				{
					name: 'Floating Holiday'
				},
				{
					name: 'Company Holiday'
				},
				{
					name: 'Jury Duty'
				},
				{
					name: 'Military Absense'
				},
				{
					name: 'Medical Leave'
				},
				{
					name: 'Short Term Disability'
				}
			],
			fields: [
				{
					name: 'name'
				}
			]
		}, cfg)]);
	}
});