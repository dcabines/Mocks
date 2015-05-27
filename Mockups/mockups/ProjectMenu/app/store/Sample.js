Ext.define('MyApp.store.Sample', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var fields = [
			'budget_type',
			'charge_code',
			'charge_code_desc',
			'suffix',
			'suffix_descr',
			'budget_date',
			'budget_amount',
			'go_num',
			'seq_no'
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
			storeId: 'SearchResults',
			data: makeData(),
			fields: fields
		}, cfg)]);
	}
});