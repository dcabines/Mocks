Ext.define('MyApp.store.Rates', {
	extend: 'Ext.data.Store',
	alias: 'store.Rates',

	constructor: function (cfg) {
		var fields = [
			'effdt',
			'price_list_name',
			'supplier',
			'rate_code',
			'shift',
			'billable_job_title',
			'upc',
			'upc_effdt',
			'cost_st',
			'cost_ot',
			'cost_dt',
			'cost_perdiem',
			'cost_mileage',
			'cost_perdiem_taxable',
			'cost_mileage_taxable',
			'bill_st',
			'bill_ot',
			'bill_dt',
			'bill_perdiem',
			'bill_mileage',
			'pay_st',
			'pay_ot',
			'pay_dt',
			'expdt'
		];

		var getRandomInt = function (min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		var makeRecord = function () {
			var record = {};

			Ext.each(fields, function (field) {
				record[field] = getRandomInt(1, 11);
			});

			return record;
		};

		var makeData = function () {
			var data = [];

			for (var j = 0; j < 50; j++) {
				data[j] = makeRecord();
			}

			return data;
		};

		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			data: makeData(),
			fields: fields
		}, cfg)]);
	}
});