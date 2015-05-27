Ext.define('Shared.store.requests', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'requests',
			data: [
				{
					week: 35,
					month: 'Aug',
					date: 25,
					mon: '',
					tue: 'PTO-4',
					wed: '',
					thu: '',
					fri: 'PTO-4',
					sat: '',
					sun: 'PTO-4'
				},
				{
					week: 36,
					month: 'Sep',
					date: 1,
					mon: 'PTO-4',
					tue: '',
					wed: 'PTO-8',
					thu: '',
					fri: 'PTO-8',
					sat: '',
					sun: 'PTO-4'
				},
				{
					week: 37,
					month: 'Sep',
					date: 8,
					mon: 'PTO-4',
					tue: '',
					wed: 'PTO-8',
					thu: 'PTO-8',
					fri: 'PTO-8',
					sat: '',
					sun: ''
				},
				{
					week: 38,
					month: 'Sep',
					date: 15,
					mon: '',
					tue: 'PTO-4',
					wed: 'PTO-4',
					thu: '',
					fri: 'PTO-4',
					sat: '',
					sun: 'PTO-4'
				},
				{
					week: 39,
					month: 'Sep',
					date: 22,
					mon: 'PTO-4',
					tue: '',
					wed: 'PTO-8',
					thu: 'PTO-8',
					fri: '',
					sat: 'PTO-4',
					sun: 'PTO-4'
				},
				{
					week: 40,
					month: 'Sep',
					date: 22,
					mon: 'PTO-4',
					tue: '',
					wed: 'PTO-4',
					thu: 'PTO-4',
					fri: '',
					sat: 'PTO-4',
					sun: 'PTO-4'
				},
				{
					week: 41,
					month: 'Sep',
					date: 22,
					mon: 'PTO-4',
					tue: '',
					wed: 'PTO-4',
					thu: 'PTO-4',
					fri: '',
					sat: 'PTO-4',
					sun: 'PTO-4'
				},
				{
					week: 42,
					month: 'Sep',
					date: 22,
					mon: 'PTO-4',
					tue: '',
					wed: 'PTO-8',
					thu: 'PTO-4',
					fri: '',
					sat: 'PTO-8',
					sun: 'PTO-8'
				}
			],
			fields: [
				{
					name: 'week'
				},
				{
					name: 'mon'
				},
				{
					name: 'tue'
				},
				{
					name: 'wed'
				},
				{
					name: 'thu'
				},
				{
					name: 'fri'
				},
				{
					name: 'sat'
				},
				{
					name: 'sun'
				}
			]
		}, cfg)]);
	}
});