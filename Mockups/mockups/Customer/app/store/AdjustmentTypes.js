Ext.define('MyApp.store.AdjustmentTypes', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'AdjustmentTypes',
            data: [
                {
                    name: 'Max Carry Over'
                },
                {
                    name: 'Bank'
                },
                {
                    name: 'Accrual Rate'
                }
            ],
            fields: [
                {
                    type: 'string',
                    name: 'name'
                }
            ]
        }, cfg)]);
    }
});