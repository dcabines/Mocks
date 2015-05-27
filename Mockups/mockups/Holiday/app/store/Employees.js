Ext.define('MyApp.store.Employees', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Employees',
			data: [
				{ gid: '123', name: 'Bob', calendar: 'Special', shift: 'a' },
				{ gid: '123', name: 'Mary', calendar: 'Festivus', shift: 'a' },
				{ gid: '123', name: 'Joe', calendar: 'Something Else', shift: 'a' }
			],
			fields: [
				['gid','name','calendar','shift']
			]
		}, cfg)]);
	}
});