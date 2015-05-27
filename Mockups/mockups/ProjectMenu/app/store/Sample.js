(function () {
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

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function makeRecord() {
		var record = {};

		Ext.each(fields, function (field) {
			record[field] = getRandomInt(1, 11);
		});

		return record;
	};

	function makeData() {
		var data = [];

		for (var j = 0; j < 50; j++) {
			data[j] = makeRecord();
		}

		return data;
	};

	Ext.define('MyApp.store.Sample', {
		extend: 'Ext.data.Store',
		alias: 'store.Sample',

		constructor: function (cfg) {
			cfg = cfg || {};

			this.callParent([Ext.apply({
				data: makeData(),
				fields: fields
			}, cfg)]);
		},

		refresh: function () {
			var data = makeData();
			this.loadData(data);
		}
	});
}());