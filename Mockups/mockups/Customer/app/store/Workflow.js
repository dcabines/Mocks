Ext.define('MyApp.store.Workflow', {
	extend: 'Ext.data.Store',

	constructor: function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'Workflow',
			data: [
				{
					id: '124-d',
					name: 'Bob Dobbs',
					event: 'Deleted',
					rule: '43-d',
					step: '2',
					priority: '0',
					created: '12/16/2012'
				},
				{
					id: '123-d',
					name: 'Bob Dobbs',
					event: 'Created',
					rule: '43-d',
					step: '1',
					priority: '0',
					created: '12/12/2012'
				}
			],
			fields: [
				{
					name: 'id',
					type: 'string'
				},
				{
					name: 'name',
					type: 'string'
				},
				{
					name: 'event',
					type: 'string'
				},
				{
					name: 'rule',
					type: 'string'
				},
				{
					name: 'step',
					type: 'int'
				},
				{
					name: 'priority',
					type: 'int'
				},
				{
					name: 'created',
					type: 'date'
				}
			]
		}, cfg)]);
	}
});