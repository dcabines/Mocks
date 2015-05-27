Ext.define('MyApp.store.Adjustments', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Adjustments',
			data: [
				{
					date: '',
					type: '',
					frequency: '',
					adjustment: 0
				},
				{
					date: '8/7/2001',
					type: 'Bank',
					frequency: 'Anually',
					adjustment: 20
				},
				{
					date: '1/28/2011',
					type: 'Accrual Rate',
					frequency: 'Monthly',
					adjustment: 5.35
				},
				{
					date: '6/22/2006',
					type: 'Max Carry Over',
					frequency: 'Anually',
					adjustment: 10
				}
			],
			fields: [
				{
					type: 'date',
					name: 'date'
				},
				{
					type: 'string',
					name: 'type'
				},
				{
					type: 'string',
					name: 'frequency'
				},
				{
					type: 'float',
					name: 'adjustment'
				}
			]
		}, cfg)]);
	}
});